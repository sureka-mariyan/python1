import { test, expect } from '@playwright/test';

test('test date picker interaction', async ({ page }) => {
    
    
    await page.goto('file:///Users/apple/Playwright_final/index.html'); 

    
    await page.waitForSelector('#date');

    
    await page.fill('#date', '2025-03-15');

    
    page.on('dialog', async dialog => {
        const alertMessage = dialog.message();
       
        expect(alertMessage).toBe('You selected the date: 2025-03-15'); 
       
        await dialog.accept();
    });

    
    await page.click('#submit');
});