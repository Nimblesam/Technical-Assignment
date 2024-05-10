// LoginPage.js
import { $ } from '@wdio/globals'
import Page from "./page.js";
class LoginPage extends Page {
    get username() { return $("//input[@data-qa='login-email']"); }
    get passwordInput() { return $("//input[@placeholder='Password']"); }
    get loginButton() { return $("//button[normalize-space()='Login']"); }
    get $del() { return $("//a[normalize-space()='Delete Account']")}
    get $SignIn() {return $("//a[normalize-space()='Signup / Login']"); } 

    async delete() {
        await this.$del.click();
    }
    
    async login(username, password) {
        await this.username.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();

        
    }

    open() {
        return super.open();
    }

}

export default new LoginPage();