'use strict';

let translator = require('../../../src/index');

describe('General', () => {
    it('should translate phone with letters', () => {
        expect(translator.translate('1-800-FLOWERS')).toEqual('1-800-3569377');
    });

    it('should return phone only with numbers', () => {
        expect(translator.translate('1-800-800')).toEqual('1-800-800');
    });
});
