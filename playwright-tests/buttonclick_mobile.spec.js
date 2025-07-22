const {test, expect, devices } = require('@playwright/test');
test.use({
    ...devices['iPhone 13'],
});

test('click mobile friendly button and handle alert', async ({ page }) => {
    const filePath = '/Users/apple/Playwright_final/buttonclick_mobile.html';
    const fileUrl = 'file://' + filePath;
    
page.on('dialog', async dialog => {
        console.log('Alert message:', dialog.message());
        await dialog.dismiss();
      });
    
await page.goto(fileUrl);
    const button = page.locator('button.btn');
    await expect(button).toBeVisible();
    await button.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'button_click_test.png' });
    
});


