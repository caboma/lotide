const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  
  it("should return 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("should return Hello for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), "Hello");
  });

  it("should return 6 for [6]", () => {
    assert.strictEqual(head([6]), 6);
  });

  it("should return underfined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});