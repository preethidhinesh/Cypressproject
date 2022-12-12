
before(() => {
    Cypress.on('uncaught:exception', (err) => {
      if (
        err.message.includes("undefined (setting 'status')") ||
        err.message.includes("undefined (reading 'method')") ||
        err.message.includes("Cannot set property 'status' of undefined")
      ) {
        return false;
      }
    });
  });

it('bflylogintest', () => {
cy.visit('https://cloud.staging.bfly.io/')
cy.get('[data-bni-id="emailField"]')
    .type('pdhinesh@butterflynetinc.com')
    
//cy.get('data-bni-id="emailField"').type('pdhinesh@butterflynetinc.com{enter}')
cy.get('[data-bni-id="passwordField"]').type('Reset123{enter}')
cy.get('[data-bni-id="loginButton"]').click()

});