const { test, expect } = require( 'playwright/test');
test ('Checking page1 title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await  expect(page).toHaveTitle('STORE')
    });
