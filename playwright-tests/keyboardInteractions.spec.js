const { test, expect } = require('@playwright/test');

test.describe('Copy and Paste Events', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/keyboardInteractions.html');

    // Grant clipboard permissions
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  });

  test('should copy text and trigger alert', async ({ page }) => {
    // Listen for alert dialog before performing action
    const alertPromise = page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('You copied some text!');
      await dialog.accept();
    });

    // Fill the textarea
    await page.fill('#inputArea', 'This is some sample text.');

    // Select and copy using keyboard shortcuts
    await page.click('#inputArea');
    await page.keyboard.press('Control+A'); // Select all (Cmd+A on Mac)
    await page.keyboard.press('Control+C'); // Copy (Cmd+C on Mac)

    // Wait for alert to appear
    await alertPromise;
  });

  test('should paste text and trigger alert', async ({ page }) => {
    // Listen for alert dialog before performing action
    const alertPromise = page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('You pasted some text!');
      await dialog.accept();
    });

    // Write text to clipboard before pasting
    await page.evaluate(() => navigator.clipboard.writeText('Pasted Text from Clipboard'));

    // Click the textarea and paste
    await page.click('#inputArea');
    await page.keyboard.press('Control+V'); // Paste (Cmd+V on Mac)

    // Wait for alert to appear
    await alertPromise;
  });

  test('should show text when clicking the button', async ({ page }) => {
    // Listen for alert dialog before performing action
    const alertPromise = page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('Text in the area: Sample text for button click.');
      await dialog.accept();
    });

    await page.fill('#inputArea', 'Sample text for button click.');

    // Ensure button is visible and click it
    await page.waitForSelector('#showTextButton', { state: 'visible' });
    await page.click('#showTextButton');

    // Wait for alert to appear
    await alertPromise;
  });

});
