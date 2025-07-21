module.exports = {
    testMatch: ["**/tests/**/*.test.js"],  // ✅ Runs only tests in the /tests/ folder
    testPathIgnorePatterns: ["/playwright-tests/"],  // ✅ Ignore Playwright tests
    testEnvironment: "node",
  };
  