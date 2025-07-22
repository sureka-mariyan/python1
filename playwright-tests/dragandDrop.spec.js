const { test, expect } = require('@playwright/test');

test('Drag and Drop Test', async ({ page }) => {
    
    await page.goto('file:///Users/apple/Playwright_final/dragandDrop.html');
    const dragElement = await page.locator('#dragElement');
    const dropZone = await page.locator('#dropZone');

   
    await expect(dropZone).toHaveText('Move here');

   
    await dragElement.dragTo(dropZone);

    
    await expect(dropZone).toHaveText('Moved: Move me!');
});