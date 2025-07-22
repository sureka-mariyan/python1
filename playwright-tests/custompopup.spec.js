import { test, expect } from '@playwright/test';

test('Modal opens and closes correctly', async ({ page }) => {
  await page.goto('file:///Users/apple/Playwright_final/custompopup.html');
  const modal = page.locator('#customModal');
  await expect(modal).toBeHidden();
  await page.click('text=Open Custom Popup');
  await expect(modal).toBeVisible();
  await page.click('text=Confirm');
  await expect(modal).toBeHidden();
});