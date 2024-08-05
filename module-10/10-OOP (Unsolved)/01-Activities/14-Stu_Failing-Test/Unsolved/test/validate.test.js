// TODO: Import the Validate class.

const Validate = require('../validate');

// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('Validate', () => {
    describe('invalid', () => {
        it('should return false for an empty string', () => {
        const str = '';
        const result = new Validate().isPassword(str);

        expect(result).toEqual(false);
        })
    })
})
// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
