import { test, expect } from '@playwright/test';

test.describe('Device and Browser Detection', () => {
  test('should detect browser and device type correctly', async ({ page, browserName }) => {
    // Listen to console events from the page and print them in the terminal
    page.on('console', msg => {
        console.log(`[PAGE LOG] ${msg.type().toUpperCase()}: ${msg.text()}`);
    });

    // Your full HTML content as a string
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mobile Responsive with User Agent Emulation</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
          }
          header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .device-info {
            margin-top: 20px;
            padding: 15px;
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          @media (max-width: 768px) {
            header {
              font-size: 1.2em;
              padding: 15px;
            }
            .device-info {
              font-size: 0.95em;
            }
          }
        </style>
      </head>
      <body>
        <header>Responsive & Device Aware Web Page</header>
        <div class="device-info" id="deviceInfo">Detecting device and user agent...</div>
        <script>
          const deviceInfo = document.getElementById('deviceInfo');
          const userAgent = navigator.userAgent;
          let deviceType = "Desktop";
          if (/Mobi|Android/i.test(userAgent)) {
            deviceType = "Mobile";
          } else if (/Tablet|iPad/i.test(userAgent)) {
            deviceType = "Tablet";
          }
          let browser = "Unknown Browser";
          if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
            browser = "Google Chrome";
          } else if (userAgent.includes("Firefox")) {
            browser = "Mozilla Firefox";
          } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            browser = "Safari";
          } else if (userAgent.includes("Edg")) {
            browser = "Microsoft Edge";
          } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
            browser = "Opera";
          }
          deviceInfo.innerHTML = \`
            <strong>Device Type:</strong> \${deviceType} <br>
            <strong>Browser:</strong> \${browser} <br>
            <strong>User Agent:</strong> \${userAgent}
          \`;
         
          console.log('Page script executed, user agent detected:', userAgent);
        </script>
      </body>
      </html>
    `;

    
    await page.goto(`data:text/html,${encodeURIComponent(htmlContent)}`);

    
    const userAgent = await page.evaluate(() => navigator.userAgent);

    
    const content = await page.locator('#deviceInfo').textContent();

    
    console.log(`User Agent from page: ${userAgent}`);
    console.log(`Rendered content:\n${content}`);
    
    expect(content).toContain(userAgent);

    if (browserName === 'chromium') {
      console.log('Running on Chromium — expecting Google Chrome detection');
      expect(content).toContain('Google Chrome');
    } else if (browserName === 'firefox') {
      console.log('Running on Firefox — expecting Mozilla Firefox detection');
      expect(content).toContain('Mozilla Firefox');
    } else if (browserName === 'webkit') {
      console.log('Running on WebKit — expecting Safari detection');
      expect(content).toContain('Safari');
    }
  });
});