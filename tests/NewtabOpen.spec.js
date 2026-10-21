import {expect, test} from '@playwright/test';


test('open new tab and vefiy',async({context})=>{

   const page= await context.newPage();
    page.goto("https://the-internet.herokuapp.com/windows");
 
    const [newPage]=await Promise.all([

         context.waitForEvent('page'),
         page.getByText('click here').click(),

    ]);

    console.log( await page.title());
   console.log(await newPage.title());
       
});