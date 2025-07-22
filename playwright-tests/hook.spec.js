const { test, expect, beforeAll, beforeEach, afterEach, afterAll } = require('@playwright/test');

let browser, context, page;
beforeAll(async () => {
  console.log('Before All Tests: Setting up browser');
browser = await require('playwright').chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
});
beforeEach(async() => {
    console.log('Before each Tests: Setting up browser');
    context = await browser.newContext();
    page = await context.newPage();
});
afterEach(async () => {
    // This will run after each test
    console.log('After Each Test: Closing the page...');
    await page.close();  
  });

afterAll(async () => {
  
    console.log('After All Tests: Closing the browser...');
    await browser.close();  
  });

test('Sample Test1', async () => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).toBe('Google');
});
test('Sample Test2', async () => {
  await page.goto('https://www.example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});