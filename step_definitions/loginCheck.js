const { Given, When, Then, Before, After } = require('@cucumber/cucumber');


Given('I navigate to the login page', async ({page})=> {
  await page.goto('https://www.saucedemo.com/');  
  await page.getByRole('button', { name: 'Login' }).click();
});

When('I enter username and password', async ({page}) => {
 await page.getByplaceholder('Username').fill('standard_user');
  await page.getByplaceholder('Password').fill('secret_sauce');
});
When('I click on login button', async ({page}) => {
  await page.getByRole('button', { name: 'Login' }).click();
});
Then('I should be login successfully', async ({page}) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});