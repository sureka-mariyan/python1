import { test, expect } from '@playwright/test';

test('Open and close all JavaScript modals', async ({ page }) => {
  await page.goto('file:///Users/apple/Playwright_final/js_popup.html');

  // Modal 1
  await page.click('button:has-text("Open Modal")');
  const modal1 = page.locator('#myModal');
  await expect(modal1).toBeVisible();
  await page.click('#myModal .close-btn');
  await expect(modal1).toBeHidden();

  // Modal 2
  await page.click('button:has-text("Open Modal2")');
  const modal2 = page.locator('#myModal2');
  await expect(modal2).toBeVisible();
  await page.click('#myModal2 .close-btn');
  await expect(modal2).toBeHidden();

  // Modal 3
  await page.click('button:has-text("Open Modal3")');
  const modal3 = page.locator('#myModal3');
  await expect(modal3).toBeVisible();
  await page.click('#myModal3 .close-btn');
  await expect(modal3).toBeHidden();
});
