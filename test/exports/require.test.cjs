const assert = require('assert');
const link = require('tsds-link');

describe('exports .cjs', () => {
  it('defaults', () => {
    assert.equal(typeof link, 'function');
  });
});
