'use strict';

const translator = require('../../../src/index');

describe('General', () => {
    it('should translate phone with letters', () => {
        expect(translator.translate('1-800-FLOWERS')).toEqual('1-800-3569377');
    });

    it('should return phone only with numbers', () => {
        expect(translator.translate('1-800-800')).toEqual('1-800-800');
    });
});

describe('Letter to Number Translation', () => {
    describe('Key 2 (ABC)', () => {
        it('should translate A to 2', () => {
            expect(translator.translate('A')).toEqual('2');
        });

        it('should translate B to 2', () => {
            expect(translator.translate('B')).toEqual('2');
        });

        it('should translate C to 2', () => {
            expect(translator.translate('C')).toEqual('2');
        });
    });

    describe('Key 3 (DEF)', () => {
        it('should translate D to 3', () => {
            expect(translator.translate('D')).toEqual('3');
        });

        it('should translate E to 3', () => {
            expect(translator.translate('E')).toEqual('3');
        });

        it('should translate F to 3', () => {
            expect(translator.translate('F')).toEqual('3');
        });
    });

    describe('Key 4 (GHI)', () => {
        it('should translate G to 4', () => {
            expect(translator.translate('G')).toEqual('4');
        });

        it('should translate H to 4', () => {
            expect(translator.translate('H')).toEqual('4');
        });

        it('should translate I to 4', () => {
            expect(translator.translate('I')).toEqual('4');
        });
    });

    describe('Key 5 (JKL)', () => {
        it('should translate J to 5', () => {
            expect(translator.translate('J')).toEqual('5');
        });

        it('should translate K to 5', () => {
            expect(translator.translate('K')).toEqual('5');
        });

        it('should translate L to 5', () => {
            expect(translator.translate('L')).toEqual('5');
        });
    });

    describe('Key 6 (MNO)', () => {
        it('should translate M to 6', () => {
            expect(translator.translate('M')).toEqual('6');
        });

        it('should translate N to 6', () => {
            expect(translator.translate('N')).toEqual('6');
        });

        it('should translate O to 6', () => {
            expect(translator.translate('O')).toEqual('6');
        });
    });

    describe('Key 7 (PQRS)', () => {
        it('should translate P to 7', () => {
            expect(translator.translate('P')).toEqual('7');
        });

        it('should translate Q to 7', () => {
            expect(translator.translate('Q')).toEqual('7');
        });

        it('should translate R to 7', () => {
            expect(translator.translate('R')).toEqual('7');
        });

        it('should translate S to 7', () => {
            expect(translator.translate('S')).toEqual('7');
        });
    });

    describe('Key 8 (TUV)', () => {
        it('should translate T to 8', () => {
            expect(translator.translate('T')).toEqual('8');
        });

        it('should translate U to 8', () => {
            expect(translator.translate('U')).toEqual('8');
        });

        it('should translate V to 8', () => {
            expect(translator.translate('V')).toEqual('8');
        });
    });

    describe('Key 9 (WXYZ)', () => {
        it('should translate W to 9', () => {
            expect(translator.translate('W')).toEqual('9');
        });

        it('should translate X to 9', () => {
            expect(translator.translate('X')).toEqual('9');
        });

        it('should translate Y to 9', () => {
            expect(translator.translate('Y')).toEqual('9');
        });

        it('should translate Z to 9', () => {
            expect(translator.translate('Z')).toEqual('9');
        });
    });
});

describe('Case Sensitivity', () => {
    it('should handle lowercase letters', () => {
        expect(translator.translate('hello')).toEqual('43556');
    });

    it('should handle uppercase letters', () => {
        expect(translator.translate('HELLO')).toEqual('43556');
    });

    it('should handle mixed case letters', () => {
        expect(translator.translate('HeLLo')).toEqual('43556');
    });

    it('should translate mixed case phone number', () => {
        expect(translator.translate('1-800-FlOwErS')).toEqual('1-800-3569377');
    });
});

describe('Special Characters and Formatting', () => {
    it('should preserve hyphens', () => {
        expect(translator.translate('1-800-CALL')).toEqual('1-800-2255');
    });

    it('should preserve spaces', () => {
        expect(translator.translate('1 800 CALL')).toEqual('1 800 2255');
    });

    it('should preserve parentheses', () => {
        expect(translator.translate('(800) CALL')).toEqual('(800) 2255');
    });

    it('should preserve dots', () => {
        expect(translator.translate('1.800.CALL')).toEqual('1.800.2255');
    });

    it('should preserve plus sign', () => {
        expect(translator.translate('+1-800-CALL')).toEqual('+1-800-2255');
    });

    it('should preserve multiple special characters', () => {
        expect(translator.translate('+1 (800) 555-WORD')).toEqual('+1 (800) 555-9673');
    });

    it('should preserve asterisk and hash', () => {
        expect(translator.translate('*123#')).toEqual('*123#');
    });
});

describe('Edge Cases', () => {
    it('should handle empty string', () => {
        expect(translator.translate('')).toEqual('');
    });

    it('should handle string with only numbers', () => {
        expect(translator.translate('1234567890')).toEqual('1234567890');
    });

    it('should handle string with only letters', () => {
        expect(translator.translate('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual('22233344455566677778889999');
    });

    it('should handle single letter', () => {
        expect(translator.translate('A')).toEqual('2');
    });

    it('should handle single number', () => {
        expect(translator.translate('5')).toEqual('5');
    });

    it('should handle special characters only', () => {
        expect(translator.translate('-().')).toEqual('-().');
    });
});

describe('Real-World Phone Number Formats', () => {
    it('should translate 1-800-FLOWERS', () => {
        expect(translator.translate('1-800-FLOWERS')).toEqual('1-800-3569377');
    });

    it('should translate 1-800-DENTIST', () => {
        expect(translator.translate('1-800-DENTIST')).toEqual('1-800-3368478');
    });

    it('should translate 1-800-LAWYER', () => {
        expect(translator.translate('1-800-LAWYER')).toEqual('1-800-529937');
    });

    it('should translate 1-800-PIZZA', () => {
        expect(translator.translate('1-800-PIZZA')).toEqual('1-800-74992');
    });

    it('should translate 1-800-GOT-JUNK', () => {
        expect(translator.translate('1-800-GOT-JUNK')).toEqual('1-800-468-5865');
    });

    it('should translate international format with letters', () => {
        expect(translator.translate('+44-20-CALL-NOW')).toEqual('+44-20-2255-669');
    });
});

describe('Complete Alphabet Coverage', () => {
    it('should translate all 26 letters correctly', () => {
        const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const expected = '22233344455566677778889999';
        expect(translator.translate(input)).toEqual(expected);
    });

    it('should translate all 26 lowercase letters correctly', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz';
        const expected = '22233344455566677778889999';
        expect(translator.translate(input)).toEqual(expected);
    });
});

describe('Long Strings', () => {
    it('should handle very long phone numbers', () => {
        const input = '1-800-CALL-ME-NOW-FOR-HELP';
        const expected = '1-800-2255-63-669-367-4357';
        expect(translator.translate(input)).toEqual(expected);
    });

    it('should handle repeated letters', () => {
        expect(translator.translate('AAAA')).toEqual('2222');
    });

    it('should handle repeated numbers', () => {
        expect(translator.translate('1111')).toEqual('1111');
    });
});

describe('Numbers on Mobile Keyboard', () => {
    it('should keep 0 as 0', () => {
        expect(translator.translate('0')).toEqual('0');
    });

    it('should keep 1 as 1', () => {
        expect(translator.translate('1')).toEqual('1');
    });

    it('should handle all digits 0-9', () => {
        expect(translator.translate('0123456789')).toEqual('0123456789');
    });
});
