import {expect, Locator, Page } from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly emailTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailTextBox = page.locator("input[name='email']");
        this.passwordTextBox = page.locator("input[name='password']");
        this.loginButton = page.locator('button:has-text("Login")');
    }

    async goTo(){
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    async enterEmail(email: string){
        await this.emailTextBox.click();
        await this.emailTextBox.fill(email);
    }

    async enterPassword(password: string){
        await this.passwordTextBox.click();
        await this.passwordTextBox.fill(password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    async enterCredentialsAndLogIn(email: string, password: string){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}