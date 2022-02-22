'use strict';

const { mkdir, copyFile, rm } = require('fs/promises');
const { constants, createWriteStream, createReadStream } = require('fs');
const util = require('util');
const path = require('path');
const NodeGit = require('nodegit');
const { execFile } = require('child_process');
const glob = require('glob');

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
    let pglob = util.promisify(glob);
    for (i in spec) {
        let src, pat, dst;
        [src, pat, dst] = spec[i];
        let files = await pglob(path.join(src, pat), { nodir: true });
        files.forEach(async (from) => {
            let fr = path.relative(src, from);
            let to = path.join(dst, fr);
            await mkdir(path.dirname(to), { recursive: true });
            let readable = createReadStream(from, { encoding: 'utf8', highWaterMark: 16 * 1024 });
            let writable = createWriteStream(to);
            await new Promise(function (resolve, reject) {
                readable.pipe(writable)
                    .on('end', () => resolve())
                    .on('error', reject);
            })
        });
    }
}

async function prepare(mddir, outdir) {
    await rm(outdir + "/public", { recursive: true, force: true })
    const copy_spec = [
        [__dirname + '/../dist', '/*', outdir + "/public/build"],
        [mddir, '/*', outdir + "/public/md"],
        [mddir, '/images/*', outdir + "/public"],
        [mddir, '/assets/*', outdir + "/public"],
        [__dirname + '/../dev', '/*', outdir + "/public"]
    ];
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

async function publish(mddir, outdir, bCommit) {
    let start = new Date();
    console.log(FgCyan + '\n:: Publishing to "public"' + Reset);
    outdir = outdir || ".";
    await prepare(mddir, outdir);
    if (bCommit) {
        console.log(FgGreen + '\n:: Deploying to remote.' + Reset);
        await commit("publish public folder");
    }
    let end = new Date() - start;
    console.log(FgGreen + '\n:: publish completed in %dms.' + Reset, end);
}

module.exports = publish;

