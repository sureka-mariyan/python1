import { test, expect } from '@playwright/test';

test('Test input boxes and Save buttons functionality on Page 1', async ({ page }) => {
  await page.goto('file:///Users/apple/Playwright_final/page1.html');

  const nameInput = page.locator('#username');
  await expect(nameInput).toBeVisible();
  await expect(nameInput).toHaveAttribute('placeholder', 'Please enter your name');

  const testName = 'Alice';
  await nameInput.fill(testName);
  await expect(nameInput).toHaveValue(testName);

  const saveNameButton = page.locator('button', { hasText: 'Save Name' });
  await expect(saveNameButton).toBeVisible();
  await saveNameButton.click();

  const storedName = await page.evaluate(() => localStorage.getItem('userName'));
  expect(storedName).toBe(testName);

  
  const emailInput = page.locator('#emailid');
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toHaveAttribute('placeholder', 'Please enter your email');

  const testEmail = 'alice@example.com';
  await emailInput.fill(testEmail);
  await expect(emailInput).toHaveValue(testEmail);

  const saveEmailButton = page.locator('button', { hasText: 'Save Email' });
  await expect(saveEmailButton).toBeVisible();
  await saveEmailButton.click();

  const storedEmail = await page.evaluate(() => localStorage.getItem('userEmail'));
  expect(storedEmail).toBe(testEmail);


  const phoneInput = page.locator('#phone');
  await expect(phoneInput).toBeVisible();
  await expect(phoneInput).toHaveAttribute('placeholder', 'Please enter your phone number');

  const testPhone = '9633789555';
  await phoneInput.fill(testPhone);
  await expect(phoneInput).toHaveValue(testPhone);

  const savePhoneButton = page.locator('button', { hasText: 'Save Phone' });
  await expect(savePhoneButton).toBeVisible();
  await savePhoneButton.click();

  const storedPhone = await page.evaluate(() => localStorage.getItem('userPhone'));
  expect(storedPhone).toBe(testPhone);
});