const { test, expect } = require('@playwright/test');

test('should show an alert with correct message when button is clicked', async ({ page }) => {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('This is a simple alert box!');
    await dialog.accept(); 
  });

  
  await page.goto('file:///Users/apple/Playwright_final/alertbox.html');

  await page.click('button');
});