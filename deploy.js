'use strict';

import { readFile, mkdir } from 'fs/promises';
import { constants } from 'fs';
import { default as util } from 'util';
import { default as path } from 'path';
import { default as NodeGit } from 'nodegit';
import { execFile } from 'child_process';
import { getopt } from 'stdio';
import { default as copyfiles } from 'copyfiles';


const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

const dist_pfx = "dist/";
const dst_pfx = "public/";
const branch = "gh-pages";

async function copy_dirs(spec) {
    let i;
    let pr_list = [];
    let f = util.promisify(copyfiles);
    for (i in spec) {
        let paths, opt;
        [paths, opt] = spec[i];
        const pr = f(paths, opt);
        pr_list.push(pr);
    }
    await Promise.all(pr_list);
}

async function publish() {
    let s = await readFile('package.json');
    let pkg = JSON.parse(s);
    let copy_spec = pkg.publishDirs;
    await copy_dirs(copy_spec);
}

async function commit(msg) {
    let docs = path.resolve(dst_pfx);
    let docsrepo;

    try {
        docsrepo = await NodeGit.Repository.open(docs);
        const remote = await docsrepo.getRemote('origin');
    } catch (e) {
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

async function deploy(bCommit) {
    console.log(FgCyan + '\n:: Deploying from "public" to "gh-pages"' + Reset);
    let start = new Date();
    await publish();
    if (bCommit) {
        console.log(FgGreen + '\n:: Pushing to remote.' + Reset);
        await commit("publish");
    }
    let end = new Date() - start;
    console.log(FgGreen + '\n:: Deploy completed in %dms.' + Reset, end);
}

try {
    const ops = getopt({
        'push': { key: 'p', description: 'push to remote git' },
    });
    console.log("options: ", ops);
    deploy(ops.push);
} catch (e) {
    console.error("error.");
}