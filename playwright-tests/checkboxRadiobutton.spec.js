const { test, expect } = require('@playwright/test');

test('Checkbox and Radio Button form submission', async ({ page }) => {
  
  await page.goto('file:///Users/apple/Playwright_final/checkboxRadiobutton.html');
  await page.check('input[type="checkbox"]#check1');
  await page.check('input[type="checkbox"]#check2');
  await page.check('input[type="checkbox"]#check4');
  await page.check('input[type="radio"]#radio4');
  await page.click('input[type="submit"]');

 page.once('dialog', async dialog => {
   
    const message = dialog.message();
    
    
    const expectedMessage = 
      "You selected the following:\n\n" +
      "Features:\nFeature 1\nFeature 2\n\n" +
      "Color: Green";
      
   
    expect(message).toBe(expectedMessage);
    
   
    await dialog.accept();
  });
});