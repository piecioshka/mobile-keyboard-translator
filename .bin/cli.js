#!/usr/bin/env node

'use strict';

var translator = require('../src/index');
var version = require('../package.json').version;
var program = require('commander');

program
    .version(version)
    .arguments('<number>')
    .action(function (phoneNumber) {
        let translatedNumber = translator.translate(phoneNumber);
        console.log(translatedNumber);
    })
    .parse(process.argv);

// In default mode, display help.
if (process.argv.length <= 2) {
    program.help();
}
