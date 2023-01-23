const Boomerang = require('../test.js');

describe('boomerang', () => {
  test('simple boomerang', () => {
    expect(Boomerang.boomerang([0, 1, 2, 3, 2, 1, 0])).toBe(true);
  });

  test('reverse boomerang', () => {
    expect(Boomerang.boomerang([4, 2, 0, 2, 4])).toBe(true);
  });

  test('no plateau', () => {
    expect(Boomerang.boomerang([0, 2, 2, 3, 2, 1, 0])).toBe(false);
  });

  test('no plateau elbow', () => {
    expect(Boomerang.boomerang([4, 2, 0, 0, 2, 4])).toBe(false);
  });

  test('asymmetric shape', () => {
    expect(Boomerang.boomerang([0, 1, 2, 3, 4, 1, 0])).toBe(true);
  });

  test('asymmetric edges', () => {
    expect(Boomerang.boomerang([4, 2, 1, 0, 3])).toBe(true);
  });

  test('multiple elbows', () => {
    expect(Boomerang.boomerang([1, 2, 4, 2, 1, 2, 4])).toBe(false);
  });

  test('missing elbow', () => {
    expect(Boomerang.boomerang([1, 2, 3, 4])).toBe(false);
  });

  test('missing elbow reverse', () => {
    expect(Boomerang.boomerang([4, 3, 2, 1])).toBe(false);
  });

  test('shortest boomerang', () => {
    expect(Boomerang.boomerang([1, 10, 1])).toBe(true);
  });

  test('too short', () => {
    expect(Boomerang.boomerang([1])).toBe(false);
  });
});
