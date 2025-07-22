import { test, expect } from '@playwright/test';

test('infinite scroll', async ({ page }) => {
  
  await page.goto('file:///Users/apple/Playwright_final/infinitescrolling.html');
  await page.waitForTimeout(1000);
  let cards = await page.locator('.card');
  await expect(cards).toHaveCount(12);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200); 
  await expect(page.locator('.card')).toHaveCount(24);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1200);
  await expect(page.locator('.card')).toHaveCount(36);
});