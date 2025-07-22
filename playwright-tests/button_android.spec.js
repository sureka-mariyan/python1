import {test, expect, devices } from '@playwright/test';
const iphone = devices['iphone12'];
const android = devices['Pixel 5'];
test.use({...iphone});
test('Popup appears on button-click', async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/button_android.html');
    await page.click('text=Click Me');
    await expect(page.locator('.popup')).toBeVisible();
    await expect(page.locator('.overlay')).toBeVisible();
    await page.click('text=Close');
    await expect(page.locator('.popup')).toBeHidden();
    await expect(page.locator('.overlay')).toBeHidden();
});
    test.use({...android});
    test('Popup appears on button-click on android', async ({ page }) => {
        await page.goto('file:///Users/apple/Playwright_final/button_android.html');
        await page.click('text=Click Me');
        await expect(page.locator('.popup')).toBeVisible();
        await expect(page.locator('.overlay')).toBeVisible();
        await page.click('text=Close');
        await expect(page.locator('.popup')).toBeHidden();
        await expect(page.locator('.overlay')).toBeHidden();    
});