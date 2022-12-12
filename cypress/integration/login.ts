
import { LoginPage } from '../Pages/loginpage';
beforeEach(function(){
cy.log('Hello there')

})

describe('all Login test', function (){


    const loginpage = new LoginPage()
beforeEach(function(){


    loginpage.Navigate('https://trytestingthis.netlify.app/');
})


it.only('pomtest', function () {

    loginpage.Navigate('https://trytestingthis.netlify.app/');
    loginpage.EnterUserName('test');
    loginpage.EnterPassword('test');
    loginpage.ClickLoginButton();
    cy.get('h2')
    //cy.contains('here').click()
    cy.clickLink('here')
    //Testing Git integration from Cypress

})

it('invalidusername', () => {

    loginpage.EnterUserName('fbgrhjbgrhgb');
    loginpage.EnterPassword('test');
    loginpage.ClickLoginButton();
    cy.on('window:alert', (txt) => {
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })

})
it('invalidPassword', () => {
    loginpage.Navigate('https://trytestingthis.netlify.app/');
    loginpage.EnterUserName('test');
    loginpage.EnterPassword('hshbghjsdbg');
    loginpage.ClickLoginButton();
    cy.on('window:alert', (txt) => {
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#fname').clear();
    cy.get('#fname').type('test');
    cy.get('#lname').clear();
    cy.get('#lname').type('rtaf');
    cy.get('#other').check();
    cy.get('#option').select('option 3');
    cy.get('.fakeimg').click();
    cy.get('.pop-up-alert > button').click();
    cy.get('[ondblclick="myFunction()"]').click();
    cy.get('[ondblclick="myFunction()"]').click();
    cy.get('#myfile').click();
    cy.get('#day').click();
    /* ==== End Cypress Studio ==== */
})

})