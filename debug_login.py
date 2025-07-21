from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)  # Open browser visibly
    page = browser.new_page()

    # Open the website
    page.goto("https://skordev.com")

    # Wait for the "Sign In" button and click it
    sign_in_button = page.wait_for_selector("button:has-text('Sign In')", timeout=5000)
    sign_in_button.click()

    # Wait a moment and print all input fields
    page.wait_for_timeout(3000)  # Wait for pop-up to appear
    inputs = page.query_selector_all("input")
    
    if inputs:
        print("Found input fields:")
        for i, input_field in enumerate(inputs):
            print(f"Input {i}: {input_field.get_attribute('name')}")
    else:
        print("No input fields found!")

    browser.close()
