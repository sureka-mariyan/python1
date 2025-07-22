const { test, expect } = require('@playwright/test');

test(' button in the popup', async ({ page }) => {
  
  await page.goto('file:///Users/apple/Playwright_final/eventlistner.html'); 

  
  await page.click('#openPopup');
  
  
  await page.click('#confirmBtn');

  
  const customAlertOverlay = await page.locator('#customAlertOverlay');
  await expect(customAlertOverlay).toBeVisible();
  
  
  const customAlertMessage = await page.locator('#customAlertMessage');
  await expect(customAlertMessage).toHaveText('✅ You clicked YES!');
  
  
  const customAlertBox = await page.locator('#customAlertBox');

  await page.click('button:has-text("OK")');
  await expect(customAlertOverlay).toBeHidden();
});

test('should show NO custom alert when clicking "No" button in the popup', async ({ page }) => {
 
  await page.goto('file:///Users/apple/Playwright_final/eventlistner.html'); 
  
  
  await page.click('#openPopup');
  
  
  await page.click('#cancelBtn');
  
 
  const customAlertOverlay = await page.locator('#customAlertOverlay');
  await expect(customAlertOverlay).toBeVisible();
  
 
  const customAlertMessage = await page.locator('#customAlertMessage');
  await expect(customAlertMessage).toHaveText('❌ You clicked NO!');

  await page.click('button:has-text("OK")');
  await expect(customAlertOverlay).toBeHidden();
  
  
});