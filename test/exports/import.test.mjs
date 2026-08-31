import assert from 'assert';
import link from 'tsds-link';

describe('exports .mjs', () => {
  it('defaults', () => {
    assert.equal(typeof link, 'function');
  });
});
