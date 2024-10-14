# mobile-keyboard-translator

[![node version](https://img.shields.io/node/v/mobile-keyboard-translator.svg)](https://www.npmjs.com/package/mobile-keyboard-translator)
[![npm version](https://badge.fury.io/js/mobile-keyboard-translator.svg)](https://badge.fury.io/js/mobile-keyboard-translator)
[![downloads count](https://img.shields.io/npm/dt/mobile-keyboard-translator.svg)](https://www.npmjs.com/package/mobile-keyboard-translator)
[![license](https://img.shields.io/npm/l/mobile-keyboard-translator.svg)](https://www.npmjs.com/package/mobile-keyboard-translator)

:hammer: Translate phone number with letters to only with numbers

## Installation

```bash
npm install -g mobile-keyboard-translator
```

## CLI

```bash
mobile-keyboard-translator 1-800-FLOWERS
1-800-3569377
```

## Help

```bash
mobile-keyboard-translator -h

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

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2017
