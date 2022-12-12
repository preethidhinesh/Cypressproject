export class LoginPage {

    loginpage_username = '#uname'
    loginpage_password = '#pwd'
    loginpage_submit = '[type="submit"]'
   
    Navigate(url:string){
        cy.visit(url)

    }
   
    EnterUserName(username: string){
        cy.get(this.loginpage_username).type(username)

    } 
    EnterPassword(password: string){
        cy.get(this.loginpage_password).type(password)

    }   

    ClickLoginButton(){
        cy.get(this.loginpage_submit).click()

    }
    }

    