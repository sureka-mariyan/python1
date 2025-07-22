const { test, expect } = require('@playwright/test');

test('Open website and take screenshot', async ({ page }) => {
    await page.goto('https://example.com'); // Open website
    await page.screenshot({ path: 'homepage.png' }); // Take screenshot
    console.log('✅ Screenshot saved as homepage.png');
});
