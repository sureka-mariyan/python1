from playwright.sync_api import sync_playwright
from datetime import datetime

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()  # ✅ Create a new browser context
    page = context.new_page()

    # ✅ Open the website
    page.goto("https://skordev.com")

    # ✅ Click on 'Sign In'
    page.click("text=SIGN IN")

    # ✅ Wait for login form
    page.wait_for_selector("input[placeholder='Email or username']", timeout=5000)

    # ✅ Fill login details
    page.fill("input[placeholder='Email or username']", "admin@st.com")  # Change username
    page.fill("input[placeholder='Password']", "pass")  # Change password

    # ✅ Click 'Sign In'
    page.click("button:has-text('Sign In')")

    # ✅ Wait for dashboard to load
    page.wait_for_url("**/Dashboard**", timeout=10000)

    # ✅ Go to Report Download section
    page.goto("https://skordev.com/admin-dashboard/#/report")

    # ✅ Scroll to "Report Download" section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # ✅ Wait for and select "Transaction" in the first dropdown
    page.wait_for_selector("select[ng-model='stringArrVal']", timeout=5000)
    page.select_option("select[ng-model='stringArrVal']", "string:Transaction")

    # ✅ Selecting "Year" from the second dropdown
    page.wait_for_selector("select[ng-model='filter']", timeout=5000)
    page.select_option("select[ng-model='filter']", "string:Year")

    # ✅ Click "Export as CSV"
    page.click("button:has-text('Export as CSV')")
    print("✅ Export started... Waiting for report to appear.")

    # ✅ Get current time in the UI format (12-hour format)
    current_time = datetime.now().strftime("%d-%m-%y %I:%M")
    print(f"🎯 Looking for report with timestamp: {current_time}")

    # ✅ Wait for the report with the correct timestamp
    report_locator = page.locator(f"text='{current_time} | year'")
    report_locator.wait_for(timeout=90000)

    # ✅ Ensure "Download" button appears
    print("✅ Report found! Waiting for Download button...")

    # ✅ **Select the Download button as an image (<img>)**
    download_button = report_locator.locator("xpath=//following::img[contains(@src, 'download-csv.svg')][1]")

    # ✅ **Explicit wait for the Download button**
    download_button.wait_for(timeout=60000)

    # ✅ **Check if the button exists**
    if download_button.count() > 0:
        print("✅ Download button found! Clicking now...")

        # ✅ **Listen for new tab to open**
        with context.expect_page() as new_tab_info:
            download_button.click()

        new_tab = new_tab_info.value  # ✅ Capture the new tab

        # ✅ Wait for new tab to load
        new_tab.wait_for_load_state("load", timeout=10000)

        # ✅ Get the URL of the new tab
        download_url = new_tab.url
        print(f"✅ Download page opened: {download_url}")

        # ✅ Confirm download page opened successfully
        if "transactions_" in download_url:
            print("✅ Report download confirmed (New tab has the expected URL)!")
        else:
            print("⚠️ Unexpected URL. Check manually.")

    else:
        print("❌ Download button not found. Check the UI.")

    # ✅ Close browser
    browser.close()
