import {test} from '@playwright/test';



test("admin login and create user and check",async({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();
   // await page.locator("i[class='oxd-icon bi-list oxd-topbar-header-hamburger']").click();

     await page.locator("//span[text()='Admin']").click();

     await page.locator("//button[normalize-space()='Add']").click();


         // User Role
    await page.locator("(//div[contains(@class,'oxd-select-text')])[1]").click();
    await page.locator("//span[normalize-space()='ESS']").click();

    // Employee Name
    await page.locator("//input[@placeholder='Type for hints...']").fill('b');
    await page.waitForTimeout(8000);

    // Wait for suggestion and select
    await page.locator("//div[@role='option']").first().click();

    // Status
    await page.locator("(//div[contains(@class,'oxd-select-text')])[2]").click();
    await page.locator("//span[normalize-space()='Enabled']").click();

    await page.locator("//label[text()='Username']/ancestor::div[contains(@class,'oxd-input-group')]//input")
        .fill("abhi_ess01");
    // Password
    await page.locator("(//input[@type='password'])[1]")
        .fill('Test@12345');
    // Confirm Password
    await page.locator("(//input[@type='password'])[2]")
        .fill('Test@12345');

    // Save
    await page.locator("//button[normalize-space()='Save']").click();

    // Success message
    await expect(page.locator("//p[contains(@class,'oxd-text--toast-message')]")).toBeVisible();
















});

