describe('fileupload',function(){
    it('fileuploadtest',function(){
        cy.visit('https://filebin.net/')
        cy.get('[id="fileField"]').attachFile('cypress.png')
    })
})