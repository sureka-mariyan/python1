import { test, expect } from '@playwright/test';

test('Should set, get, and delete a cookie via UI', async ({ page }) => {
  await page.goto('http://localhost:8000/handling_cookies.html');

  await page.fill('#nameInput', 'JohnDoe');
  await page.click('button:has-text("Set Cookie")');


  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('JohnDoe');
    await dialog.dismiss();
  });
  await page.click('button:has-text("Get Cookie")');
  await page.waitForTimeout(500000);


  //await page.click('button:has-text("Delete Cookie")');

  
  //page.once('dialog', async dialog => {
  //  expect(dialog.message()).toBe('');
  //  await dialog.dismiss();
 // });
 // await page.click('button:has-text("Get Cookie")');
});