import { test, expect } from '@playwright/test';

test('isolated browser context', async ({ page }) => {
  await page.goto('file:///Users/apple/Playwright_final/isolated_browsercontext.html');
  const iframe = page.frameLocator('iframe');
  const initialColor = await iframe.locator('body').evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(initialColor).toBe('rgb(238, 238, 255)'); 

  await iframe.getByRole('button', { name: 'Change Background' }).click();
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Background color changed inside iframe!');
    await dialog.accept();
  });

  const newColor = await iframe.locator('body').evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  expect(newColor).toBe('rgb(204, 238, 255)'); 
});