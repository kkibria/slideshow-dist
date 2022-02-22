'use strict';

const publish = require('./lib/publish');
const slideshow = require('./lib/slideshow');
const pkgjson = require('./package.json');
const { Command } = require('commander');
const program = new Command();

program
    .name('slideshow')
    .description('Easy slideshow presentation in browser')
    .version(pkgjson.version);

program.command('open')
    .description('Starts slideshow server to open presentation')
    .argument('<mdpath>', 'directory/path to markdown slideshow file/s')
    .action(async (mdpath) => {
        try {
            await slideshow(mdpath);
        } catch (e) {
            console.error(`${e}`);
        }
    });

program.command('publish')
    .description('Package all the files in a directory named "public" for website')
    .argument('<mdpath>', 'directory/path to markdown slideshow file/s')
    .option('--out <string>', 'directory where "public" will be placed')
    .action(async (mdpath, options) => {
        try {
            await publish(mdpath, options.out);
        } catch (e) {
            console.error(`${e}`);
        }
    });

program.parse();