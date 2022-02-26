'use strict';

const publish = require('./lib/publish');
const slideshow = require('./lib/slideshow');
const { Command } = require('commander');
const program = new Command();
const open = require('open');
const pkgjson = require('./package.json');

program
    .name('slideshow')
    .description('Easy slideshow presentation in browser')
    .version(`Version: ${pkgjson.versionMsg}`);

program.command('open')
    .description('Starts slideshow server to open presentation')
    .argument('[mdpath]', 'directory/path to markdown slideshow file/s')
    .action(async (mdpath) => {
        try {
            await slideshow(mdpath);
        } catch (e) {
            console.error(`${e}`);
        }
    });

program.command('publish')
    .description('Package all the files in a directory named "public" for website')
    .argument('[mdpath]', 'directory/path to markdown slideshow file/s')
    .option('--out <string>', 'directory where "public" will be placed')
    .action(async (mdpath, options) => {
        try {
            await publish(mdpath, options.out);
        } catch (e) {
            console.error(`${e}`);
        }
    });

    program.command('manual')
    .description('Open user manual')
    .action(async () => {
        try {
            await open(`${pkgjson.usermanual}`);
        } catch (e) {
            console.error(`${e}`);
        }
    });

program.parse();
