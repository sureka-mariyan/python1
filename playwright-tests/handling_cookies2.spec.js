import { test, expect } from '@playwright/test';

const url = 'http://localhost:3000/handling_cookies2.html';

test('should set and delete cookie using buttons', async ({ page }) => {
 
  await page.goto(url);

  await page.click('text=Set Cookie');

  
  let cookies = await page.context().cookies();
  const usernameCookie = cookies.find(c => c.name === 'username');
  expect(usernameCookie).toBeTruthy();
  expect(usernameCookie?.value).toBe('JohnDoe');


  await page.click('text=Delete Cookie');

 
  cookies = await page.context().cookies();
  const deletedCookie = cookies.find(c => c.name === 'username');
  expect(deletedCookie).toBeFalsy();
});