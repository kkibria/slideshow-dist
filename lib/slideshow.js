'use strict';

const sirv = require('sirv');
const polka = require('polka');
const compress = require('compression')();
const { createServer } = require('livereload');
const { find } = require('port-authority');
const { readFile, access, stat } = require('fs/promises');
const { Readable } = require("stream")
const open = require('open');
const path = require('path');
const { constants } = require('fs');

const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

function inject(port) {
    const snippetSrc = `'//' + (self.location.host || 'localhost').split(':')[0] + ':${port}/livereload.js?snipver=1'`;
    return `(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = ${snippetSrc}; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);`
}

async function serve(liveport, srvrport, mdpath, ch) {
    const port = await find(liveport);
    var server = createServer({
        port: port,
        extraExts: ['md']
    });
    server.watch(mdpath);
    console.log(`> ${FgGreen}livereload${Reset} listening to ${FgCyan}port ${port}${Reset}`);

    const d = await readFile(__dirname + "/../dist/bundle.js");
    const bundle_data = inject(port) + '\n' + d;
    function injectlive(req, res, next) {
        if (req.path == '/bundle.js' && req.method == 'GET') {
            const rs = Readable.from([bundle_data]);
            rs.pipe(res);
        } else {
            next();
        }
    }

    const assets = sirv(__dirname + '/../dev');
    const dist = sirv(__dirname + '/../dist');
    const md = sirv(mdpath, { dev: true });
    const img = sirv(mdpath + "/images", { dev: true });
    const polkport = await find(srvrport);
    polka()
        .use(compress, assets)
        .use('/build', compress, injectlive, dist)
        .use('/md', compress, md)
        .use('/images', compress, img)
        .listen(polkport, err => {
            if (err) throw err;
            let url = `http://localhost:${polkport}`;
            console.log(`> ${FgGreen}Server${Reset} ready at ${FgCyan}${url}${Reset}`);
            console.log(`\n===== ${FgGreen}Opening browser to view${Reset} =====`);
            console.log(`\nWatching ${FgCyan}${path.resolve(mdpath)}${Reset} folder for changes...`);
            console.log(`\nType ${FgGreen}ctrl-c${Reset} to quit server.`);
            open(`${url}/?ch=${ch}`);
        });
}

async function slideshow(mdpath) {
    mdpath = mdpath || ".";
    await access(mdpath, constants.F_OK);
    const stats = await stat(mdpath);
    let mddir = mdpath;
    let ch = "index";
    if (stats.isFile()) {
        const { name, ext } = path.parse(mdpath);
        mddir = path.dirname(mdpath);
        if (ext == ".md" && name.substring(0, 2) == 'ch') {
            ch = name.substring(2);
        } else {
            console.error(`${FgCyan}${mdpath}${Reset} is not a slideshow file!`);
            return;
        }
    }
    await serve(35729, 5000, mddir, ch);
}

module.exports = slideshow;
