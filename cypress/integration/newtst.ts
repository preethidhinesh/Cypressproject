it('assertion',function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn btn btn-primary')
        .should('be.enabled')
        .should('be.visible')
    cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')

        cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn btn btn-primary')

        expect(true).to.be.true
        assert.equal(4,4,'Not equal')
        assert.strictEqual(4,4,'Not equal')


})