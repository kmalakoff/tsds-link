import assert from 'assert';
import link from 'tsds-link';

describe('exports .ts', () => {
  it('defaults', () => {
    assert.equal(typeof link, 'function');
  });
});
