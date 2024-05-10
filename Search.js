//Import the subpage containing the locators and methods.
import { expect } from '@wdio/globals'
import LoginPage from "../pageobjects/Login.Page.js";
import SPage from '../pageobjects/search.page.js';

//Create a test suite
describe('Search functionality', () => {
    it('should succesfuly search product using search bar', async () => {
        LoginPage.open();
        await expect(browser).toHaveTitle("Automation Exercise")
       await browser.pause(2000)
       await SPage.$prodct.click()
      await expect(browser).toHaveUrl("https://www.automationexercise.com/products")
      await SPage.$srchbar.setValue("Green Side Placket Detail T-Shirt")
      await SPage.$srch.click()
      const lst = await $("//h2[@class='title text-center']")
      await expect(lst).toHaveText("SEARCHED PRODUCTS") 
     
    })
});