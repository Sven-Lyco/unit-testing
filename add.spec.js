import add from './add.js';

describe('add', () => {
  //should add two numbers
  it('returns the sum of two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  it('should not add strings', () => {
    const result = add('1', 2);
    expect(result).toBe(3);
  });
});
