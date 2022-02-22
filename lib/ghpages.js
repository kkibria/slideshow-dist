'use strict';

const { mkdir } = require('fs/promises');
const util = require('util');
const path = require('path');
const NodeGit = require('nodegit');
const { execFile } = require('child_process');

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

const dst_pfx = "public/";
const branch = "gh-pages";

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
    const f = util.promisify(execFile);
    const { stdout, stderr } = await f('git', ['push', '-f', 'origin', branch], { cwd: dst_pfx });
    console.log(stdout);
    console.log(stderr);
}

module.exports = ghpages;

