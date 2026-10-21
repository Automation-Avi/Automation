import{test,expect} from '@playwright/test';


test('all data',async({page})=>{

await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

const name=await page.locator('.inventory_item_name ').allTextContents();

const price=await page.locator('.inventory_item_price').allTextContents();


for(let i=0; i<name.length; i++){

    console.log(name[i]+price[i]);

}

});