
describe('read write file test' , () => {
    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })

    it('read file using fixture' , function(){
        cy.fixture('example.json')
        .its('name').should('eq' , 'Using fixtures to represent data')
        cy.log(this.data.name)
        cy.log(this.data.email)
        
    })

    it('readfile' , function(){
cy.readFile('./cypress/fixtures/example.json')
.its('name').should('eq' , 'Using fixtures to represent data')
    })

    it('writefile', function (){
        cy.writeFile('sample.txt' , 'Hello we are learning cypress')
        cy.writeFile('sample.txt' , 'Hello we are learning cypress today')
        cy.writeFile('sample.txt' , '\nMy Name is preethi' ,{flag: 'a+'})
        cy.readFile('sample.txt').should('contain','cypress')
    })
})