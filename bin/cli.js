#!/usr/bin/env node

'use strict';

const translator = require('../src/index');
const version = require('../package.json').version;
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2), {
    boolean: ['help', 'version'],
    alias: {
        h: 'help',
        V: 'version'
    }
});

// Display version
if (argv.version) {
    console.log(version);
    process.exit(0);
}

// Display help
if (argv.help || argv._.length === 0) {
    console.log('Usage: mobile-keyboard-translator [options] <number>');
    console.log('');
    console.log('Options:');
    console.log('  -V, --version  output the version number');
    console.log('  -h, --help     output usage information');
    process.exit(0);
}

// Translate phone number
const phoneNumber = argv._[0];
const translatedNumber = translator.translate(phoneNumber);
console.log(translatedNumber);
