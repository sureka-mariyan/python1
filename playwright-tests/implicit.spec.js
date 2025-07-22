const { test, expect } = require('@playwright/test');

test('Implicit html page test', async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/implicit.html');
    const title = await page.title();
    expect (title).toBe('Implicit HTML Page');
    const h1Text = await page.textContent('h1');
    expect (h1Text).toBe('Welcome to the Implicit HTML Page');
    const pText = await page.textContent('p');
    expect (pText).toBe('This is a simple HTML page with basic structure. The page includes a header, some text, and a link below.');
    const link = page.locator('a');
    expect(await link.getAttribute('href')).toBe('https://amazon.com');
    const linkTarget = await link.getAttribute('target');
    expect(linkTarget).toBe('_blank');
    

});
  