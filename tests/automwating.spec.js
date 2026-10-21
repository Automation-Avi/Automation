import {expect, test} from '@playwright/test';


test('chceckboxes',async({page})=>{


    await page.goto('https://the-internet.herokuapp.com/dynamic_controls?utm_source=chatgpt.com');

     await page.getByRole('button',{name:'Remove'}).click();

    await expect (page.locator('#message')).toHaveText("It's gone!");

})