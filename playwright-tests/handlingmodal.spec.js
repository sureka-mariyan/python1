const { test, expect } = require('@playwright/test');

test.describe('Modal Dialog Behavior', () => {
  test('should open and close the modal correctly', async ({ page }) => {
    
    await page.goto('file:///Users/apple/Playwright_final/handlingmodal.html'); 

    
    const modal = page.locator('#myModal');
    await expect(modal).toHaveCSS('display', 'none');

    
    await page.click('#openModalBtn');


    await expect(modal).toHaveCSS('display', 'block');

    
    await page.click('#closeModalBtn');

    
    await expect(modal).toHaveCSS('display', 'none');
  });
});