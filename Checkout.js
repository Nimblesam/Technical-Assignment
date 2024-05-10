//Import the subpages containing the locators and methods.
import { expect } from '@wdio/globals'
import LoginPage from "../pageobjects/Login.Page.js";
import Logincheck from '../pageobjects/login.chck.js';
import RegPage from '../pageobjects/Reg.page.js';

describe('Checkout functionality', () => {
    it('Valid Login before Checkout', async () => {
        LoginPage.open();
        await expect(browser).toHaveTitle("Automation Exercise")
        await LoginPage.$SignIn.click()
        const UserS = await $("//h2[normalize-space()='Login to your account']");
        await expect(UserS).toHaveText("Login to your account");
        LoginPage.login('tester99@gmail.com', 'tester99');
        const txt = await $("//li[10]//a[1]");
        await expect(txt).toHaveText("Logged in as test");
        await browser.pause(3000)
        await Logincheck.addprod.click()
        await browser.pause(2000)
        await Logincheck.continue.click()
        const link = await $('[href="/view_cart"]')
        await link.click()
        await browser.pause(3000)
        const shp = await $("//li[@class='active']")
        await expect(shp).toHaveText("Shopping Cart") 
        await Logincheck.chkout.click()
        const addtail = await $("//h2[normalize-space()='Address Details']")
        await expect(addtail).toHaveText("Address Details") 
        let ordrev = await $("//h2[normalize-space()='Review Your Order']")
        await expect(ordrev).toHaveText("Review Your Order")
        await browser.pause(3000)
        await Logincheck.comment.setValue("Order complete! Hope I get it shipped asap")
        await Logincheck.plcorder.click()
        Logincheck.Checkout('Douglas Kumar', '4763726378927730', '722', '11', '1980');
        const succ = await $("//b[normalize-space()='Order Placed!']")
        await expect(succ).toHaveText("ORDER PLACED!") 
        await RegPage.delete()
        const accdel = await $("h2[class='title text-center'] b");
        await expect(accdel).toHaveText("ACCOUNT DELETED!");
        await browser.pause(1000);
        await Logincheck.chekdel.click()

        
    });
});