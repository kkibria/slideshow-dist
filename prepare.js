'use strict';

const util = require('util');
const fs = require('fs');
const ncp = require('ncp').ncp;
const mkdirp = require('mkdirp');

ncp.limit = 16;

// promisified versions 
const prms = {
    stat: util.promisify(fs.stat),
    ncp: util.promisify(ncp),
    access: util.promisify(fs.access)
}

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

const src_pfx = "public/";
const dst_pfx = "docs/";

let pkg = JSON.parse(fs.readFileSync('package.json'));
let copy_spec = pkg.publishDirs;

async function copy(src, dst) {
    await prms.access(src, fs.F_OK);
    mkdirp.sync(dst);
    console.info(`==> Copying "${src}" to "${dst}"...`);
    await prms.ncp(src, dst);
}

async function do_n2p(spec) {
    console.log(FgCyan + '\n:: Copying from "public" to "docs"' + Reset);
    let start = new Date();

    let i;
    let pr_list = [];
    for (i in spec) {
        let src_path = src_pfx + spec[i];
        let dst_path = dst_pfx + spec[i];
        const pr = copy(src_path, dst_path);
        pr_list.push(pr);
    }
    await Promise.all(pr_list);
    let end = new Date() - start;
    console.log(FgGreen + '\n:: Copy completed in %dms.' + Reset, end);
}

do_n2p(copy_spec);

