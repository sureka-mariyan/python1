import { test, expect } from '@playwright/test';

test.describe('Local & Session Storage Manager', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/managing_sessiondata.html');
  });

  // LOCAL STORAGE TESTS
  test('should set and get local storage item', async ({ page }) => {
    await page.fill('#local-key', 'username');
    await page.fill('#local-value', 'john_doe');
    await page.click('button:has-text("Set Local Storage")');

    await page.click('button:has-text("Get Local Storage")');
    const output = await page.locator('#local-output').textContent();
    expect(output).toContain('Retrieved: username = john_doe');
  });

  test('should remove a local storage key', async ({ page }) => {
    await page.fill('#local-key', 'username');
    await page.click('button:has-text("Remove Key")');

    await page.click('button:has-text("Get Local Storage")');
    const output = await page.locator('#local-output').textContent();
    expect(output).toContain('not found in Local Storage');
  });

  test('should clear all local storage', async ({ page }) => {
    await page.fill('#local-key', 'site');
    await page.fill('#local-value', 'testsite');
    await page.click('button:has-text("Set Local Storage")');
    await page.click('button:has-text("Clear Local Storage")');

    await page.click('button:has-text("Get Local Storage")');
    const output = await page.locator('#local-output').textContent();
    expect(output).toContain('not found in Local Storage');
  });

  // SESSION STORAGE TESTS
  test('should set and get session storage item', async ({ page }) => {
    await page.fill('#session-key', 'theme');
    await page.fill('#session-value', 'dark');
    await page.click('button:has-text("Set Session Storage")');

    await page.click('button:has-text("Get Session Storage")');
    const output = await page.locator('#session-output').textContent();
    expect(output).toContain('Retrieved: theme = dark');
  });

  test('should remove a session storage key', async ({ page }) => {
    await page.fill('#session-key', 'theme');
    await page.click('button:has-text("Remove Key")');

    await page.click('button:has-text("Get Session Storage")');
    const output = await page.locator('#session-output').textContent();
    expect(output).toContain('not found in Session Storage');
  });

  test('should clear all session storage', async ({ page }) => {
    await page.fill('#session-key', 'sessionKey');
    await page.fill('#session-value', '123');
    await page.click('button:has-text("Set Session Storage")');
    await page.click('button:has-text("Clear Session Storage")');

    await page.click('button:has-text("Get Session Storage")');
    const output = await page.locator('#session-output').textContent();
    expect(output).toContain('not found in Session Storage');
  });
});