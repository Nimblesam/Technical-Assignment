import { expect } from '@wdio/globals'
import LoginPage from "../pageobjects/Login.Page.js";

describe('Login functionality', () => {
    it('should login with valid credentials', async () => {
        LoginPage.open();
        await expect(browser).toHaveTitle("Automation Exercise")
        await LoginPage.$SignIn.click()
        const logintxt = await $("//h2[normalize-space()='Login to your account']")
        await expect(logintxt).toHaveText("Login to your account")
        LoginPage.login('tester66@gmail.com', 'tester66');
        const txt = await $("//li[10]//a[1]");
        await expect(txt).toHaveText("Logged in as test");
        await browser.pause(3000)
        await LoginPage.delete()
        const acdel = await $("h2[class='title text-center'] b");
        await expect(acdel).toHaveText("ACCOUNT DELETED!");
        await browser.pause(1000);

        
    });

    it('should not login with invalid credentials', async () => {
        LoginPage.open();
        await expect(browser).toHaveTitle("Automation Exercise")
        await browser.pause(2000)
        await LoginPage.$SignIn.click()
        const UserS = await $("//h2[normalize-space()='Login to your account']");
        await expect(UserS).toHaveText("Login to your account");
        await browser.pause(2000)
        LoginPage.login('tester7790@gmail.com', 'tester770');
        await browser.pause(1000)
        const txt = await $("//p[normalize-space()='Your email or password is incorrect!']");
        await expect(txt).toHaveText("Your email or password is incorrect!");
        await browser.pause(1000);

    })
});