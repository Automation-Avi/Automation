import { test, expect } from '@playwright/test';


test("dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  const dropdown = page.locator("#dropdown").selectOption("1");
    await expect(dropdown).toBeVisible();

});

