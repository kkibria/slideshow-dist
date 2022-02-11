'use strict';

import { readFile, access, mkdir, stat, copyFile } from 'fs/promises';
import { constants } from 'fs';
import { default as ncp } from 'ncp';
import { default as util } from 'util';
import { default as mkdirp } from 'mkdirp';
import { default as path } from 'path';
import { default as NodeGit } from 'nodegit';
import { execFile } from 'child_process';

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

const src_pfx = "dev/";
const dst_pfx = "public/";
const branch = "gh-pages";

ncp.limit = 16;

async function copy(src, dst) {
    await access(src, constants.F_OK);
    const st = await stat(src);
    console.info(`==> Copying "${src}" to "${dst}"...`);
    if (st.isDirectory()) {
        await mkdirp(dst);
        let f = util.promisify(ncp);
        await f(src, dst);
    } else {
        await copyFile(src, dst);
    }
}

async function do_n2p(spec) {
    let i;
    let pr_list = [];
    for (i in spec) {
        let src_path = src_pfx + spec[i];
        let dst_path = dst_pfx + spec[i];
        const pr = copy(src_path, dst_path);
        pr_list.push(pr);
    }
    await Promise.all(pr_list);
}

async function publish() {
    let s = await readFile('package.json');
    let pkg = JSON.parse(s);
    let copy_spec = pkg.publishDirs;
    let docs = path.resolve(dst_pfx);
    await mkdir(docs, { recursive: true });
    await do_n2p(copy_spec);
}

async function commit(msg) {
    let docs = path.resolve(dst_pfx);
    let docsrepo;

    try {
        docsrepo = await NodeGit.Repository.open(docs);
        const remote = await docsrepo.getRemote('origin');
    } catch(e) {
        const pathToRepo = path.resolve(".");
        const repo = await NodeGit.Repository.open(pathToRepo);
        const url = (await repo.getRemote('origin')).url();
        await mkdir(docs, { recursive: true });
        docsrepo = await NodeGit.Repository.init(docs, 0);
        await NodeGit.Remote.create(docsrepo, 'origin', url);
        await docsrepo.setHead("refs/heads/" + branch);
    }

    let parent = [];
    const h = await docsrepo.getHeadCommit();
    if (h) {
        parent.push(h);
    }
    const index = await docsrepo.refreshIndex();
    await index.addAll(".");
    await index.write();
    const oid = await index.writeTree();
    const sig = NodeGit.Signature.now("default", "default");
    await docsrepo.createCommit('HEAD', sig, sig, msg, oid, parent);
    await push();
}

async function push() {
    const f = util.promisify(execFile);
    const { stdout, stderr } = await f('git', ['push', '-f', 'origin', branch], { cwd: dst_pfx });
    console.log(stdout);
    console.log(stderr);
}

async function deploy() {
    console.log(FgCyan + '\n:: Deploying from "public" to "docs"' + Reset);
    let start = new Date();
    await publish();
    await commit("publish");
    let end = new Date() - start;
    console.log(FgGreen + '\n:: Deploy completed in %dms.' + Reset, end);
}

try {
    deploy();
} catch(e) {
    console.error("error.");
}