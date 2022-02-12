'use strict';

import { default as sirv } from 'sirv';
import { default as polka } from 'polka';
import { default as compression } from 'compression';
import { createServer } from 'livereload';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { find } from 'port-authority';
import { readFile, writeFile, copyFile, mkdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const Reset = "\x1b[0m";
const FgGreen = "\x1b[32m";
const FgCyan = "\x1b[36m";
const Bright = "\x1b[1m";
const Dim = "\x1b[2m";
const Normal = "\x1b[22m";

function inject(port) {
    const  snippetSrc = `'//' + (self.location.host || 'localhost').split(':')[0] + ':${port}/livereload.js?snipver=1'`;
    return `(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = ${snippetSrc}; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);`
}

async function start(liveport, srvrport) {
    const port = await find(liveport);
    var server = createServer({
        port: port,
        extraExts: ['md']
    });
    server.watch(__dirname + "/dev");

    // now instrument the code
    await mkdir("dev/build", { recursive: true });
    const src = "dist/bundle";
    const dst = "dev/build/bundle";
    const bundle = await readFile(src + '.js');
    await writeFile(dst + '.js', inject(port) + '\n' + bundle);
    await copyFile(src + '.css', dst + '.css');
    console.log(`> ${FgGreen}livereload${Reset} listening to ${FgCyan}localhost:${port}${Reset} ~!`);

    const assets = sirv('dev', {
        dev: true
    });

    const polkport = await find(srvrport);
    polka()
        .use(compression(), assets)
        .listen(polkport, err => {
            if (err) throw err;
            console.log(`> ${FgGreen}Server${Reset} Ready on ${FgCyan}localhost:${polkport}${Reset} ~!`);
        });
}

start(35729, 5000);