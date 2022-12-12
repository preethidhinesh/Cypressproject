describe('Studiotest', ()=>{
    it('Studio1',()=>{
        
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('Studio2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#fname').clear();
        cy.get('#fname').type('Preetg');
        cy.get('#lname').clear();
        cy.get('#lname').type('dhin');
        cy.get('#female').check();
        cy.get('#option').select('option 3');
        cy.get('[ondblclick="myFunction()"]').click();
        cy.get('#uname').clear();
        cy.get('#uname').type('test');
        cy.get('#pwd').clear();
        cy.get('#pwd').type('test');
        cy.get('[type="submit"]').click();
        cy.get('h4 > a').click();
        /* ==== End Cypress Studio ==== */
    });
})