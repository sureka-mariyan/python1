const { test, expect } = require('@playwright/test');

test('Test the "Load More" button on Reqres', async ({ page }) => {

  await page.goto('https://reqres.in/#support-heading');

 
  const listUsersButton = page.getByRole('listitem').filter({ hasText: 'List users' })
  await expect(listUsersButton).toBeVisible(); 
 
  await listUsersButton.click();

  const userItem = page.getByText('{ "page": 2, "per_page": 6, "')
  await expect(userItem).toBeVisible(); 
 
  
});