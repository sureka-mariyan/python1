import { test, expect } from '@playwright/test';
import path from 'path';

test.use({
  viewport: { width: 400, height: 800 },  
  hasTouch: true,                         
  isMobile: true                          
});

test('should detect touch events only', async ({ page }) => {
  // Load the HTML page using file:// protocol
  const filePath = `file://${path.resolve(__dirname, '../ss_te_mi.html')}`;
  await page.goto(filePath);
  const touchBox = page.locator('#touchBox');
  const status = page.locator('#status');
  await touchBox.dispatchEvent('touchstart');
  await expect(status).toHaveText('Touch detected!');
  await touchBox.dispatchEvent('touchend');
  await expect(status).toHaveText('Touch ended!');
});