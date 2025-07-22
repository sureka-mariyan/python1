const { test, expect } = require('@playwright/test');

test('Verify Submit button click action', async ({ page }) => {
    // 1. Navigate to the test website
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html', { timeout: 60000 });

    // 2. Locate and click the Submit button
    await page.locator('input[type="submit"]').click();

    // 3. Verify that the confirmation page loads
    await expect(page).toHaveURL(/.*the_form_processor.php/);
});
