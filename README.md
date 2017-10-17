# mobile-keyboard-translator ([npm](https://www.npmjs.com/package/mobile-keyboard-translator))

[![npm version](https://badge.fury.io/js/mobile-keyboard-translator.svg)](https://badge.fury.io/js/mobile-keyboard-translator)
![](https://img.shields.io/npm/dt/mobile-keyboard-translator.svg)
[![Travis](https://img.shields.io/travis/piecioshka/mobile-keyboard-translator.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/mobile-keyboard-translator)
[![Coverage Status](https://coveralls.io/repos/github/piecioshka/mobile-keyboard-translator/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/mobile-keyboard-translator?branch=master)

> :hammer: Translate phone number with letters to only with numbers

## Usage

```
$ npm install mobile-keyboard-translator
$ mobile-keyboard-translator 1-800-FLOWERS
1-800-3569377
```

## Help

```
$ mobile-keyboard-translator -h

  Usage: mobile-keyboard-translator [options] <number>


  Options:

    -V, --version  output the version number
    -h, --help     output usage information
```

## Purpose

This is mobile keyboard:

    -------------------
    |  1  |  2  |  3  |
    |     | ABC | DEF |
    -------------------
    |  4  |  5  |  6  |
    | GHI | JKL | MNO |
    -------------------
    |  7  |  8  |  9  |
    | PQRS| TUV | WXYZ|
    -------------------
    |  *  |  0  |  #  |
    |     |     |     |
    -------------------
    
    Credits: https://rebased.pl/akademia.html

Tool converts ex. `1-800-FLOWERS` to `1-800-3569377`.

## Unit tests

Use Jasmine to setup unit test:

```
$ npm test
```

## Code coverage

Use Istanbul to get code coverage ratio:

```
$ npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
