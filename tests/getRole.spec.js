import {expect, test} from '@playwright/test';


test('click by role',async({page})=>{

   
    page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username').fill('standard_user');

     await page.getByPlaceholder('Password').fill('secret_sauce');

     await page.locator('#login-button').click();

     await expect(page.locator("span[data-test='title']")).toBeVisible();
     


});
