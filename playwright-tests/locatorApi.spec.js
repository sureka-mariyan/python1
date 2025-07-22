const { test, expect } = require('@playwright/test');

test('Open website and click on search', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    const searchInput = page.getByRole('searchbox', { name: 'Search Amazon.in' })
    const searchButton = page.getByRole('button', { name: 'Go', exact: true });
    await searchInput.dblclick();
    await searchInput.fill('Playwright');
    await searchButton.click();
    const results = page.getByRole('link', { name: 'Web Automation Testing Using' })
    await expect(results).toBeVisible({ timeout: 10000 });
});