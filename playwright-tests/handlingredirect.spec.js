const { test, expect } = require('@playwright/test');

test('should handle redirects', async ({ page }) => {
  
  page.on('response', async (response) => {
    
    if (response.status() >= 300 && response.status() < 400) {
      console.log(`Redirected from: ${response.request().url()}`);
      console.log(`Redirected to: ${response.headers()['location']}`);
    }
  });

 
  await page.goto('https://www.wikipedia.com/');
  await page.waitForTimeout(3000); 
  await expect(page).toHaveURL('https://www.wikipedia.org/'); 
});