import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log("Runs once before all tests.");
});

test.beforeEach(async ({ page }) => {
    console.log("Runs before each test.");
    await page.goto('https://example.com');
});

test('Test 1', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
});

test('Test 2', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Example Domain');
});

test.afterEach(async () => {
    console.log("Runs after each test.");
});

test.afterAll(async () => {
    console.log("Runs once after all tests.");
});
