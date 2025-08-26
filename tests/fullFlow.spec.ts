import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.page';
import { HomePage } from '../pages/homePage.page';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach('setup', async ({page}) =>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await loginPage.goTo();
})

//await loginPage.enterCredentialsAndLogIn(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
//SHOULD BE THIS!
test('Order some kind of a dish on Tuesday or Wednesday and receive a success notification', async ({ page }) => {
    await loginPage.enterCredentialsAndLogIn('tomas.smociukas@sft.com', 'student893');

    await homePage.clickRandomDay();
    await homePage.clickRandomDish();
    await homePage.clickOrderButton();

    await expect(homePage.orderNotification).toBeVisible();
})
