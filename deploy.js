'use strict';

const publish = require('./lib/publish');
const { ghpages, rls_tag, version_msg } = require('./lib/ghpages');
const { Command } = require('commander');
const program = new Command();


program
    .name('deploy')

program.command('ghpages')
    .option('-p, --push', 'push to remote git', false)
    .action(async (ops) => {
        try {
            await publish('md', ".");
            if (ops.push) {
                await ghpages("publish public folder");
            }
        } catch (e) {
            console.error(`error: ${e}`);
        }
    });

    program.command('rls-tag')
    .action(async () => {
        try {
            await rls_tag();
        } catch (e) {
            console.error(`error: ${e}`);
        }
    });

    program.command('set-version')
    .action(async () => {
        try {
            await version_msg(true);
        } catch (e) {
            console.error(`error: ${e}`);
        }
    });

program.parse();