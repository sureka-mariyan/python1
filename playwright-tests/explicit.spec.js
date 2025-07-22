const { test, expect } = require('@playwright/test');

test('Explicit html page test', async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/explicit.html');
    //const title = await page.title();
    //expect (title).toBe('Explicit HTML Page');
    //const h1Text = await page.textContent('h1');
    //expect (h1Text).toBe('Welcome to the Explicit HTML Page');
    const button = page.locator('button');
    await expect(button).toBeVisible();
    page.on('dialog', dialog => {
        // Assert the alert message
        expect(dialog.message()).toBe('Button clicked! The page is working explicitly.');
        dialog.accept();
    });
        await button.click();
   
});
