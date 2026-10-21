import{test} from '@playwright/test';


test('upload file',async({page})=>{

    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');

    await page.locator('#upload-single').setInputFiles('D:\Abhishek\Api-Server\API\package.json');



});