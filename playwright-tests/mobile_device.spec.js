// mobile_device.spec.js
const { test, devices } = require('@playwright/test');

// Load Android preset from Playwright's devices
test.use({
  ...devices['Galaxy Note 9'],
});

test('open local file and screenshot on iPhone 12', async ({ page }) => {
  await page.goto('file:///Users/apple/Playwright_final/mobile_device.html');
  await page.screenshot({ path: 'mobile-view.png' });
});
