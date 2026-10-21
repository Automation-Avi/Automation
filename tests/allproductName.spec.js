import { test, expect } from '@playwright/test';

test('Get all product names and prices', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
        .fill('standard_user');

    await page.locator('[data-test="password"]')
        .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    const productNames = await page
        .locator('.inventory_item_name')
        .allInnerTexts();

    const productPrices = await page
        .locator('.inventory_item_price')
        .allInnerTexts();

    for (let i = 0; i < productNames.length; i++) {
        console.log(
            'Product Name:', productNames[i],
            '| Price:', productPrices[i]
        );
    }
});