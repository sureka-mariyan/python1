const { test, expect } = require( 'playwright/test');
test ('Handling redirects and waiting for page load', async ({ page }) => {
await page.goto('https://example.com');
await page.waitForLoadState('domcontentloaded');
const title = await page.title();
expect (title).toBe( 'Example Domain');
});