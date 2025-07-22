const { test, expect } = require('@playwright/test');  

test.describe('Registration Form', () => {

  
  test.beforeEach(async ({ page }) => {
    
    await page.goto('file:///Users/apple/Playwright_final/inputTypes.html'); 
  });

  
  test('should render the registration form correctly', async ({ page }) => {
    // Check if the form fields are visible
    await expect(page.locator('label[for="firstName"]')).toBeVisible();
    await expect(page.locator('label[for="lastName"]')).toBeVisible();
    await expect(page.locator('label[for="email"]')).toBeVisible();
    await expect(page.locator('label[for="phone"]')).toBeVisible();
    await expect(page.locator('label[for="dob"]')).toBeVisible();
    await expect(page.locator('label[for="gender"]')).toBeVisible();
    await expect(page.locator('label[for="password"]')).toBeVisible();  
    await expect(page.locator('label[for="confirmPassword"]')).toBeVisible();
  });

  
  test('should allow filling out and submitting the form', async ({ page }) => {
    
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="phone"]', '1234567890');
    await page.fill('input[name="dob"]', '1990-01-01');
    await page.selectOption('select[name="gender"]', 'male');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password123');

   
    await page.click('button[type="submit"]');

    
    const successMessage = await page.locator('#successMessage');
    await expect(successMessage).toHaveText('Registration successful! Thank you for signing up.');
  });
  test('should show an error message if passwords do not match', async ({ page }) => {
    
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="phone"]', '1234567890');
    await page.fill('input[name="dob"]', '1990-01-01');
    await page.selectOption('select[name="gender"]', 'male');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password321');  // Password mismatch

    
    await page.click('button[type="submit"]');

   
    const errorMessage = await page.locator('.error-message');
    await expect(errorMessage).toHaveText('Passwords do not match');
  });


});