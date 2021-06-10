const { Tanker } = require('@tanker/client-node')

describe('Tanker', () => {
  it('should not display a warning', async () => {
    const t = new Tanker({
      appId: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    })

    const identity = "a wrong identity";
    await expect(t.start(identity)).rejects.toThrow(`Invalid secret permanent identity provided: ${identity}`);
  });
});
