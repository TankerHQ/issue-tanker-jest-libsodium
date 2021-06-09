const { Tanker } = require('@tanker/client-node')

describe('Tanker', () => {
  it('should not display a warning', async () => {
    new Tanker({
      appId: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopq'
    })
  });
});
