import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Scrape product names and prices', async ({ page }) => {
    // Navigate to a sample e-commerce page
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

    // Extract product names and prices
    const products = await page.locator('.title').allInnerTexts();
    const prices = await page.locator('.price').allInnerTexts();

    // Combine extracted data
    let data = "Product Name, Price\n";
    for (let i = 0; i < products.length; i++) {
        data += `"${products[i]}", "${prices[i]}"\n`;
    }

    // Save to CSV
    fs.writeFileSync('products.csv', data);
    console.log("✅ Data scraped and saved as products.csv");

    // Verify that some products were extracted
    expect(products.length).toBeGreaterThan(0);
    expect(prices.length).toBeGreaterThan(0);
});
