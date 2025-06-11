// login.data-driven.spec.js
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const { parse } = require('csv-parse/sync');

// Configure tests to run in headed mode
test.use({ headless: false });

// Read and parse the CSV file
const records = parse(fs.readFileSync('./login_data.csv'), {
  columns: true,
  skip_empty_lines: true
});

test.describe('Data-Driven Login Tests', () => {
  for (const record of records) {
    test(`Login Test - Username: "${record.username}" Password: "${record.password}"`, async ({ page }) => {
      // Navigate to the login page
      await page.goto('https://practicetestautomation.com/practice-test-login/');
      
      // Fill in the login form
      await page.fill('#username', record.username);
      await page.fill('#password', record.password);
      
      // Click the submit button
      await page.click('#submit');

      // Wait for either success or error message
      const successMessage = page.locator('h1');
      const errorMessage = page.locator('#error');
      
      // Check if this is the valid credential set
      if (record.username === 'student' && record.password === 'Password123') {
        // Assert successful login
        await expect(successMessage).toHaveText('Logged In Successfully');
        await expect(page.locator('text=Log out')).toBeVisible();
        console.log(`✅ Login PASSED for username: ${record.username}`);
        
        // Logout for the next test
        await page.click('text=Log out');
      } else {
        // Assert failed login
        await expect(errorMessage).toBeVisible();
        const error = await errorMessage.textContent();
        console.log(`❌ Login FAILED for username: ${record.username} - Error: ${error}`);
      }
    });
  }
}); 