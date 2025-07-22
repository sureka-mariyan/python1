const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Show browser
  const context = await browser.newContext();
  const page = await context.newPage();

  // Start timing
  const startTime = Date.now();

  // Go to the website
  await page.goto('https://example.com', { waitUntil: 'load' });

  // End timing
  const endTime = Date.now();
  console.log('Page Load Time:', endTime - startTime, 'ms');

  // Get performance metrics from the browser
  const metrics = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('navigation')));
  const paintMetrics = await page.evaluate(() => JSON.stringify(window.performance.getEntriesByType('paint')));

  console.log('\nNavigation Timing Metrics:');
  console.log(metrics);

  console.log('\nPaint Metrics:');
  console.log(paintMetrics);

  await browser.close();
})();
