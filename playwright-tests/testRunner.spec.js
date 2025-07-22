const { test, expect } = require('@playwright/test');  // ✅ Use Playwright test

test.describe('Playwright Test Suite', () => {
  test('should open a page', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
  });
});
