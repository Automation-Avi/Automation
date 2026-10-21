import { test } from '@playwright/test';

test('manual context', async ({ browser }) => {

  const context1 = await browser.newContext();
  const page = await context1.newPage();
  await page.goto('https://google.com');


  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await page.goto('https://www.w3schools.com/');

});


