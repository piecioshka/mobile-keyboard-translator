#!/usr/bin/env node

'use strict';

const translator = require('../src/index');
const version = require('../package.json').version;
const program = require('commander');

program
    .version(version)
    .arguments('<number>')
    .action((phoneNumber) => {
        const translatedNumber = translator.translate(phoneNumber);
        console.log(translatedNumber);
    })
    .parse(process.argv);

// In default mode, display help.
if (process.argv.length <= 2) {
    program.help();
}
