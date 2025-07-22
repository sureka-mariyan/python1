import { test, expect } from '@playwright/test';

test('Static vs Dynamic Web Elements on YouTube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  const searchInput = page.locator('input[aria-label="Search"]');
  
  //await expect(searchInput).toBeVisible();
  await searchInput.fill('COCOME');
  await searchInput.press('Enter');
  const searchResults = page.locator('ytd-video-renderer');
  await expect(searchResults).toHaveCountGreaterThan(0);
  const firstVideoTitle = page.locator('ytd-video-renderer #video-title');
  await expect(firstVideoTitle).toBeVisible();
  const viewCount = page.locator('ytd-video-renderer #metadata-line span:nth-child(1)');
  await expect(viewCount).toBeVisible();
});