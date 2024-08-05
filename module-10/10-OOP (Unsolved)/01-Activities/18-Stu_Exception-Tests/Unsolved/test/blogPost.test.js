const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('authorName short', () => {
    it('should throw error when authorName is less than 2 characters', () => {
      const blogPost = () => new BlogPost('a');
      const err = new Error('Author must be at least 2 characters long.')

      expect(blogPost).toThrow(err);
    })
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  describe('authorName error correct', () => {
    it('should throw error when the authorName does not only contain proper characters', () => {
      const blogPost = () => new BlogPost('***');
      const err = new Error('Author must only contain letters, numbers, dashes, and underscores.')

      expect(blogPost).toThrow(err);
    })
  })
});
