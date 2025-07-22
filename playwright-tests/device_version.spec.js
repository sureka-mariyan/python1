import { devices } from '@playwright/test';

for (const [name, device] of Object.entries(devices)) {
  console.log(`Device: ${name}`);
  console.log(`  User Agent: ${device.userAgent}`);
  console.log(`  Viewport: ${device.viewport.width}x${device.viewport.height}`);
  console.log(`  Device Scale Factor: ${device.deviceScaleFactor}`);
  console.log(`  Is Mobile: ${device.isMobile}`);
  console.log(`  Has Touch: ${device.hasTouch}`);
  console.log('---');
}