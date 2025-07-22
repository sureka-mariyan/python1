const { test, expect } = require('@playwright/test');
test('Waiting for page load and check for element', async ({ page }) => {
    await page.goto('https://example.com');
    await page.waitForLoadState('load');
   // await expect(page.locator('h1')).toHaveText('Example Domain');
    await page.getByRole('heading', { name: 'Example Domain' }).click();
});