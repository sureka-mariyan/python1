from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # Open the website
    page.goto("https://skordev.com")

    # Click on 'Sign In'
    page.click("text=SIGN IN")

    # Wait for login form
    page.wait_for_selector("input[placeholder='Email or username']", timeout=5000)

    # Fill login details
    page.fill("input[placeholder='Email or username']", "admin@st.com")  # Change username
    page.fill("input[placeholder='Password']", "pass")  # Change password

    # Click 'Sign In'
    page.click("button:has-text('Sign In')")

    # Wait for dashboard to load
    page.wait_for_url("**/Dashboard**", timeout=10000)

    # Go to Report Download section
    page.goto("https://skordev.com/admin-dashboard/#/report")

    # Scroll to "Report Download" section
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

    # Wait for and select "Transaction" in the first dropdown
    page.wait_for_selector("select[ng-model='stringArrVal']", timeout=5000)
    page.select_option("select[ng-model='stringArrVal']", "string:Transaction")

    # ✅ Selecting "Year" from the second dropdown
    page.wait_for_selector("select[ng-model='filter']", timeout=5000)
    page.select_option("select[ng-model='filter']", "string:Year")

    # Click "Export as CSV"
    page.click("button:has-text('Export as CSV')")

    # Wait for the file to appear
    page.wait_for_selector("text=Download", timeout=10000)

    print("✅ Report successfully downloaded!")

    browser.close()
