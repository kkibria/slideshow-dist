'use strict';

require('sirv');
require('polka');
require('compression');
const createServer = require('livereload').createServer;
const find = require('port-authority').find;
const readFile = require('fs/promises').readFile;
const writeFile = require('fs/promises').writeFile;
const copyFile = require('fs/promises').copyFile;
const mkdir = require('fs/promises').mkdir;
const getopt = require('stdio').getopt;

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

async function start(liveport, srvrport, mdpath) {
    const port = await find(liveport);
    var server = createServer({
        port: port,
        extraExts: ['md']
    });
    server.watch(__dirname + "/" + mdpath);

    // now instrument the code
    await mkdir("dev/build", { recursive: true });
    const src = "dist/bundle";
    const dst = "dev/build/bundle";
    const bundle = await readFile(src + '.js');
    await writeFile(dst + '.js', inject(port) + '\n' + bundle);
    await copyFile(src + '.css', dst + '.css');
    console.log(`> ${FgGreen}livereload${Reset} listening to ${FgCyan}port ${port}${Reset}`);

    const assets = sirv('dev');
    const md = sirv(mdpath, { dev: true });
    const img = sirv(mdpath + "/images", { dev: true });
    const polkport = await find(srvrport);
    polka()
        .use(compression(), assets)
        .use('/md', compression(), md)
        .use('/images', compression(), img)
        .listen(polkport, err => {
            if (err) throw err;
            console.log(`> ${FgGreen}Server${Reset} ready at ${FgCyan}http://localhost:${polkport}${Reset}`);
            console.log(`\n===== ${FgGreen}Use you browser to view${Reset} =====`);
        });
}

try {
    const ops = getopt({
        'mddir': {
            key: 'm',
            description: 'directory of the markdown files',
            required: true,
            args: 1
        },
    });
    start(35729, 5000, ops.mddir);
} catch (e) {
    console.error("error.");
}