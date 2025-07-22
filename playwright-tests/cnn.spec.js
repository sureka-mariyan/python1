import { test, expect } from '@playwright/test';

test('test dynamic elements on CNN homepage', async ({ page }) => {
  await page.goto('https://edition.cnn.com/');
  const moreDropdown = page.locator('#moreDropdown');
  await expect(moreDropdown).toBeVisible();
  await moreDropdown.dblclick();
  const scienceLink = page.locator('a', { hasText: 'Science' });

 // const dissatisfiedLink = page.locator('a', { hasText:'Dissatisfied voters in the US' });
 // await expect(dissatisfiedLink).toBeVisible();
  //await dissatisfiedLink.dblclick();
  //const openMenuButton = page.locator('button[aria-label="Open Menu Icon"]');
  //await expect(openMenuButton).toBeVisible();
 // await openMenuButton.dblclick();
  //const healthLink = page.locator('#pageHeader').getByRole('link', {name: 'Health'});
  //await expect(healthLink).toBeVisible();
  //await healthLink.dblclick();
  //await expect(page).toHaveURL(/health/);
});