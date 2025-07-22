import { test as base, expect, devices } from '@playwright/test';
import path from 'path';

const devicesToTest = [ 
    { name: 'iphone12', config: devices['iPhone 12'] },
    { name: 'Pixel 5', config: devices['Pixel 5'] }
];

const browsers = ['chromium', 'firefox', 'webkit'];

for (const browserType of browsers) {
    for (const device of devicesToTest) {
        // Firefox doesn't support isMobile
        if (browserType === 'firefox' && device.config?.isMobile) {
            continue;
        }

        const testWithDevice = base.extend({
            contextOptions: {
                ...device.config,
            },
            browserName: browserType,
        });

        testWithDevice.describe(`${device.name} on ${browserType}`, () => {
            testWithDevice('Popup appears on button click', async ({ page }) => {
                const filePath = `file://${path.resolve(__dirname, '../button_android.html')}`;
                await page.goto(filePath);
                await page.click('text=Click Me');
                await expect(page.locator('#popup')).toBeVisible();
                await expect(page.locator('#overlay')).toBeVisible();
                await page.click('text=Close');
                await expect(page.locator('#popup')).toBeHidden();
            });
        });
    }
}