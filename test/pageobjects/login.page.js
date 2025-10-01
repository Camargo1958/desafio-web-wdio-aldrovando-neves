import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Página de Login
 */
class LoginPage extends Page {
    /**
     * define o mapeaento dos elementos da página
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    async isErrorMessageDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
    
    async getErrorMessageText() {
        return await this.errorMessage.getText();
    }

    /**
     * método para realizar o login
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
     return super.open('');
    }
}

export default new LoginPage();
