'use strict';

const mobileKeyboardMap = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    '*': [],
    0: [],
    '#': []
};

// Flatter letters to single list.
const letters = Object.values(mobileKeyboardMap)
    .reduce((list, item) => list.concat(item), []);

/**
 * @param {string} char - Single element of phone number.
 * @returns {string|null} Translated letters to number.
 */
function translateSingleChar(char) {
    const lowerCaseChar = char.toLowerCase();
    const isLetter = letters.includes(lowerCaseChar);

    // If passed char is not letter return that value.
    // Translate only when passed value is a letter.
    if (!isLetter) {
        return char;
    }

    // Stop, after find first match.
    for (let key in mobileKeyboardMap) {
        if (mobileKeyboardMap[key].includes(lowerCaseChar)) {
            return key;
        }
    }

    return null;
}

/**
 * Iterate over each phone number element and try translate it.
 *
 * @param {string} phoneNumber - Phone number with letters.
 * @returns {string} Translated phone number without letters.
 */
function translate(phoneNumber) {
    return phoneNumber
        .split('')
        .map(translateSingleChar)
        .join('');
}

module.exports = { translate };
