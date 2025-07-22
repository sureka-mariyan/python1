import { test, expect } from '@playwright/test';

test.describe('Google Search with Allure', () => {
  test('should search for Playwright on Google', async ({ page }) => {
    await test.step('Open Google', async () => {
      await page.goto('https://www.google.com');
      await page.waitForLoadState('domcontentloaded'); // Ensure page loads

      // Handle cookie consent if it appears
      const acceptButton = page.locator('button:has-text("Accept all")');
      if (await acceptButton.isVisible()) {
        await acceptButton.click();
      }

      // Dismiss potential pop-ups (Google sign-in, notifications)
      const closePopup = page.locator('button:has-text("No thanks")');
      if (await closePopup.isVisible()) {
        await closePopup.click();
      }
    });

    await test.step('Search for Playwright', async () => {
      const searchBox = page.locator('input[name="q"]');
      await searchBox.waitFor({ state: 'visible', timeout: 10000 }); // Ensure input is visible
      await searchBox.fill('Playwright');
      await searchBox.press('Enter');
      await page.waitForTimeout(3000); // Wait for results to load
    });

    await test.step('Verify Results', async () => {
      const title = await page.title();
      expect(title).toContain('Playwright');
    });
  });
});
