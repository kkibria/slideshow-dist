'use strict';

const { mkdir, writeFile } = require('fs/promises');
const util = require('util');
const path = require('path');
const NodeGit = require('nodegit');
const { execFile } = require('child_process');
const pkgfile = 'package.json';
const pkgjson = require('../' + pkgfile);

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

const dst_pfx = "public/";
const branch = "gh-pages";

const f = util.promisify(execFile);

async function ghpages(msg) {
    console.log(FgGreen + '\n:: Deploying to remote.' + Reset);
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
    const { stdout, stderr } = await f('git', ['push', '-f', 'origin', branch], { cwd: dst_pfx });
    console.log(stdout);
    console.log(stderr);
}

async function version_msg(update) {
    let r = {};
    r = await f('git', ['rev-parse', '--short', 'HEAD']);
    const commitId = r.stdout.trim();
    pkgjson.versionMsg = `${pkgjson.version}-${commitId}`;
    if (update) {
        await writeFile(pkgfile, JSON.stringify(pkgjson, null, 2));
    }
}

async function rls_tag() {
    let r = {};
    await version_msg(false);
    const tag = `v${pkgjson.versionMsg}`;
    console.log(FgGreen + `\n:: Releasing tag '${tag}' to origin.` + Reset);
    r = await f('git', ['tag', tag]);
    r = await f('git', ['push', 'origin', 'tag', tag]);
    console.log(r.stderr);
}

exports.ghpages = ghpages;
exports.rls_tag = rls_tag;
exports.version_msg = version_msg;
