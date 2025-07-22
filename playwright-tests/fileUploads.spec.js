const { test, expect } = require('@playwright/test');
test('file upload test', async ({ page }) => {

    await page.goto('file:///Users/apple/Playwright_final/fileUploads.html');
    const fileInput = await page.locator('#fileInput')
    const filePath = '/Users/apple/Downloads/Micro_Screen_H.U_NUHS_Mar2025.pptx';
    await fileInput.setInputFiles(filePath);
    await page.click('button[type="submit"]');
    await expect(page.locator('#successMessage')).toBeVisible();
    await page.waitForTimeout(2000);
});