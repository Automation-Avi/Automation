import{test,expect} from '@playwright/test';


test('iframe',async({page})=>{

await page.goto('https://practice.expandtesting.com/iframe');
 const frame=await page.frameLocator('#mce_0_ifr');
 
 await frame.locator('body').fill('hello');

await page.waitForTimeout(3000);


});