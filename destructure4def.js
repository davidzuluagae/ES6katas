cribe('destructuring can also have default values', () => {

  it('for an empty array', () => {
    const [a=1] = [];
    assert.equal(a, 1);
  });

  it('for a missing value', () => {
    const [,b=2] = [1,,3];
    assert.equal(b, 2);
  });

  it('in an object', () => {
    const {b=2} = {a: 1};
    assert.equal(b, 2);
  });

  it('if the value is undefined', () => {
    const {a, b=2} = {a: 1, b: void 0};
    assert.strictEqual(b, 2);
  });

  it('also a string works with defaults', () => {
    const [a=3, b=2] = '1';
    assert.equal(a, '1');
    assert.equal(b, 2);
  });

});
