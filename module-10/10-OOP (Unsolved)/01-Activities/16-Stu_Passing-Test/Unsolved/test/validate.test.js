const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
  describe('Password length', () => {
    it('should return false if the password length is less than 8 characters', () => {
      const validate = new Validate();
      const result = validate.isPassword('hi123');

      expect(result).toEqual(false); 
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe('Password Uppercase', () => {
    it('should return false if the password does not contain any uppercase letters', () => {
      const validate = new Validate();
      const result = validate.isPassword('hello123olleh');

      expect(result).toEqual(false); 
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe('Password lowercase', () => {
    it('should return false if the password does not contain any lowercase letters', () => {
      const validate = new Validate();
      const result = validate.isPassword('HELLO123OLLEH');

      expect(result).toEqual(false); 
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe('Password number', () => {
    it('should return false if the password does not contain any numbers', () => {
      const validate = new Validate();
      const result = validate.isPassword('HelloolleH');

      expect(result).toEqual(false); 
    })
  })
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe('Password complete', () => {
    it('should return true if password fulfills all requirements', () => {
      const validate = new Validate();
      const result = validate.isPassword('Hello123olleH');

      expect(result).toEqual(true); 
    })
  })
});
