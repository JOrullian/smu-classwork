const Component = require('../lib/component');

describe('Component', () => {
    it('should throw error if render() method is called directly', () => {
    const component = new Component();
    const err = new Error('child class must implement render() method.');
    expect(component.render()).toThrow(err);
    });
})