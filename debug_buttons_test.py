from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)  # Open browser visibly
    page = browser.new_page()
    page.goto("https://skordev.com")

    # Wait for the page to load
    page.wait_for_timeout(5000)  # Wait 5 seconds to ensure elements load

    # Find all buttons on the page
    buttons = page.locator("button").all()

    if not buttons:
        print("No buttons found on the page.")
    else:
        for i, button in enumerate(buttons):
            print(f"Button {i}: {button.inner_text()}")

    browser.close()
