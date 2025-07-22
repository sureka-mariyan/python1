const { test, expect } = require('@playwright/test');
test('Single-click, double-click and right-click', async ({ page }) => {
    page.goto('file:///Users/apple/Playwright_final/clicks.html');
    await page.click('.action-box');
    const clickMessage = await page.locator('#message').innerText();
    expect(clickMessage).toBe('You clicked the box!');

    await page.dblclick('.action-box');
    const dblclickMessage = await page.locator('#message').innerText();
    expect(dblclickMessage).toBe('You double-clicked the box!');

    await page.click('.action-box', {button: 'right'});
    const rightclickMessage = await page.locator('#message').innerText();
    expect(rightclickMessage).toBe('You right-clicked the box!');


});