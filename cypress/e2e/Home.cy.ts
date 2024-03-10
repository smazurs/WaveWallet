describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Successfully renders "WaveWallet" header', () => {
    cy.get('h2:contains("WaveWallet")');
  });
});
