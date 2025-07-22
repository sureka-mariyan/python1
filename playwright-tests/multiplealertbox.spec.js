const { test, expect } = require('@playwright/test');

test('should show correct alert messages for both buttons', async ({ page }) => {
  
  await page.goto('file:///Users/apple/Playwright_final/multiplealertbox.html'); 
  
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('This is the FIRST alert box!');
    await dialog.accept(); 
  });

 
  await page.click('text=Show First Alert');

  
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('This is the SECOND alert box!');
    await dialog.accept(); 
  });

 
  await page.click('text=Show Second Alert');
});