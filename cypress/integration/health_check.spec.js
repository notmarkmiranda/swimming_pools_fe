describe('Health check', () => {
  it('Displays the message from the healthcheck', () => {
    cy.intercept('http://localhost:3000/api/v1/healthcheck', { fixture: "healthcheck.json"})
    cy.visit('http://localhost:3001');

    cy.get('#healthcheck-message').should(($el) => {
      expect($el).to.have.length(1)
      expect($el.first()).to.contain('all is well, check again later')
    })
  });
});