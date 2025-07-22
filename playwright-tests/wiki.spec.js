const { test, expect } = require('@playwright/test');

test('Open Wikipedia and search for JavaScript syntax', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    
    // Locate the search input and enter "Javascript"
    const searchInput = page.getByRole('searchbox', { name: 'Search Wikipedia' });
    await searchInput.dblclick();
    await searchInput.fill('Javascript');

    // Wait for the dropdown to appear
    const dropdownOption = page.getByRole('link', { name: 'JavaScript syntax Set of' });
    await dropdownOption.waitFor();

    // Click on "JavaScript syntax" from the dropdown
    await dropdownOption.click();

    // Verify that the correct page has loaded
    const results = page.getByRole('heading', { name: 'JavaScript syntax', exact: true }).locator('span');
    await expect(results).toBeVisible({ timeout: 10000 });
});
