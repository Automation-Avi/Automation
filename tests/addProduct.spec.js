import { test } from '@playwright/test';


test('add product',async({browser})=>{

const context=await browser.newContext();
const page=await context.newPage();
await page.goto('https://www.saucedemo.com/');


await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await page.waitForTimeout(5000);

const page2=await context.newPage();
await page2.goto('https://www.saucedemo.com/inventory.html');
await page2.locator("button[id='add-to-cart-sauce-labs-backpack']").click();
await page.waitForTimeout(5000);

const page3=await context.newPage();
await page3.goto('https://www.saucedemo.com/cart.html');
 await page3.locator('#shopping_cart_container').click();
 await page3.locator('#remove-sauce-labs-backpack').click();
 await page.waitForTimeout(5000);
});