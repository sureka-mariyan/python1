import { test, expect } from '@playwright/test';
test('should display page load time greater than 0', async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/perf_pageloadtime.html');
    const loadTimeElement = await page.waitForSelector('#loadTime');
    const loadTimeNext = await loadTimeElement.textContent();
    expect (loadTimeNext).toMatch(/^\d+\.\d{2} seconds$/);
    const numericLoadTime = parseFloat(loadTimeNext);
    expect(numericLoadTime).toBeGreaterThan(0);
    
})