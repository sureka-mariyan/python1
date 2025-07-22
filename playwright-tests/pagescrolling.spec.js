const { test, expect } = require('@playwright/test');

test.describe('Full Screen Scroll Page - Section Scroll Test', () => {

  const isSectionFullyVisible = async (page, sectionId) => {
    const section = await page.$(`#${sectionId}`);
    const box = await section.boundingBox();
    const viewport = page.viewportSize();

    return (
      box.y >= 0 &&
      box.y + box.height <= viewport.height + 1 &&
      Math.round(box.height) === viewport.height
    );
  };

  test('Navigate through all sections and verify full visibility', async ({ page }) => {
    await page.goto('file:///Users/apple/Playwright_final/pagescrolling.html');
    await page.waitForTimeout(500);

    // 1. Section 1 is visible on load
    expect(await isSectionFullyVisible(page, 'section1')).toBeTruthy();

    // 2. Scroll from Section 1 → Section 2
    await page.click('a[href="#section2"]');
    await page.waitForTimeout(500);
    expect(await isSectionFullyVisible(page, 'section2')).toBeTruthy();

    // 3. Scroll from Section 2 → Section 3
    await page.click('a[href="#section3"]');
    await page.waitForTimeout(500);
    expect(await isSectionFullyVisible(page, 'section3')).toBeTruthy();

    // 4. Scroll from Section 3 → Section 2
    await page.click('a[href="#section2"]');
    await page.waitForTimeout(500);
    expect(await isSectionFullyVisible(page, 'section2')).toBeTruthy();

    // 5. Scroll from Section 2 → Section 1
    await page.click('a[href="#section1"]');
    await page.waitForTimeout(500);
    expect(await isSectionFullyVisible(page, 'section1')).toBeTruthy();
  });
});
