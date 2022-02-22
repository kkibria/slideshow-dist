'use strict';

const { mkdir, rm, access } = require('fs/promises');
const { constants, createWriteStream, createReadStream } = require('fs');
const util = require('util');
const path = require('path');
const glob = require('glob');

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

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
        [mddir, '/ch*.md', outdir + "/public/md"],
        [mddir, '/images/*', outdir + "/public"],
        [mddir, '/assets/*', outdir + "/public"],
        [__dirname + '/../dev', '/*', outdir + "/public"]
    ];
    await copy_dirs(copy_spec);
}

async function publish(mddir, outdir) {
    let start = new Date();
    console.log(FgCyan + '\n:: Publishing to "public"' + Reset);
    outdir = outdir || ".";
    await access(mddir, constants.F_OK);
    await access(outdir, constants.F_OK);
    await prepare(mddir, outdir);
    let end = new Date() - start;
    console.log(FgGreen + '\n:: publish completed in %dms.' + Reset, end);
}

module.exports = publish;

