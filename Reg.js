import { expect } from '@wdio/globals'
import LoginPage from "../pageobjects/Login.Page.js";
import RegPage from '../pageobjects/Reg.page.js';

describe('User Rgistration', () => {
    it('should register successfuly', async () => {
        LoginPage.open();
        await expect(browser).toHaveTitle("Automation Exercise")
        await browser.pause(2000)
        await LoginPage.$SignIn.click()
        const Stxt = await $("div[class='signup-form'] h2");
        await expect(Stxt).toHaveText("New User Signup!");
        RegPage.SignUp('Paul', 'testauto802@gmail.com');
        const pageInfo = await $("//b[normalize-space()='Enter Account Information']");
        await expect(pageInfo).toHaveText("ENTER ACCOUNT INFORMATION");
        RegPage.Createaccount();
        await browser.pause(5000);
        const Account = await $("h2[class='title text-center'] b");
        await expect(Account).toHaveText("ACCOUNT CREATED!");
        await RegPage.cont.click()
        const accname = await $("//li[10]//a[1]");
        await expect(accname).toHaveText("Logged in as Paul");
        RegPage.delete()
        const accountdel = await $("h2[class='title text-center'] b");
        await expect(accountdel).toHaveText("ACCOUNT DELETED!");
        await browser.pause(2000)


        

    })
});