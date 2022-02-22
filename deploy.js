'use strict';

const publish = require('./lib/publish');
const { Command } = require('commander');
const program = new Command();

program
    .name('deploy')
    .option('-p, --push', 'push to remote git', false)
    .action(async (ops) => {
        try {
            await publish('md', ".", ops.push);
        } catch (e) {
            console.error(`error: ${e}`);
        }
    });

program.parse();