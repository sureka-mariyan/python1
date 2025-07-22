import { test, expect } from '@playwright/test';

test('Login to skordev.com', async ({ page }) => {
  await page.goto('https://skordev.com');

  // 1. Click on the "Sign In" button on homepage
  await page.click('text=Sign In');

  // 2. Wait for the login modal to appear
  await page.waitForSelector('text=Sign In To Your Account');

  // 3. Fill in email and password
  await page.fill('input[placeholder="Email or username"]', 'admin@st.com');
  await page.fill('input[placeholder="Password"]', 'hello5');

  // 4. Click the "Sign In" button in the modal
  await page.click('button:has-text("Sign In")');

  // 5. Wait for successful navigation (e.g., dashboard)
  await page.waitForURL('https://skordev.com/admin-dashboard/#/report');

  console.log('✅ Logged in successfully');

  await page.click('text=Report Download');
  await page.click('text=Transaction');
  
  console.log('✅ Reached report section');
});
