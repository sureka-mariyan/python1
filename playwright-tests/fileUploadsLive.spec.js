const { test, expect } = require('@playwright/test');

test('File upload test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileInput = page.locator('#file-upload');
    const filePath = '/Users/apple/Downloads/Micro_Screen_H.U_NUHS_Mar2025.pptx'; 
    await fileInput.setInputFiles(filePath);
    await expect(fileInput).toHaveValue(/Micro_Screen_H.U_NUHS_Mar2025.pptx$/);
    const submitButton = page.locator('#file-submit'); 
    await expect(submitButton).toBeEnabled();
    await submitButton.click();
    const confirmationMessage = page.locator('h3');
    await expect(confirmationMessage).toHaveText('File Uploaded!');
});
