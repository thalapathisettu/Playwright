// login.spec.js
const { test, expect } = require('@playwright/test');
test.use({ headless: true });

test.describe('Login Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page before each test
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test('Successful login with valid credentials', async ({ page }) => {
    // Fill in username
    await page.fill('#username', 'student');

    // Fill in password
    await page.fill('#password', 'Password123');

    // Click the Submit button
    await page.click('#submit');

    // Verify that login was successful
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
    await expect(page.locator('text=Log out')).toBeVisible();
  });

  test('Failed login with invalid username', async ({ page }) => {
    // Fill in invalid username
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    // Verify error message
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your username is invalid');
  });

  test('Failed login with invalid password', async ({ page }) => {
    // Fill in invalid password
    await page.fill('#username', 'student');
    await page.fill('#password', 'wrongpassword');
    await page.click('#submit');

    // Verify error message
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your password is invalid');
  });

  test('Login with empty username', async ({ page }) => {
    // Submit with empty username
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    // Verify error message
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your username is invalid');
  });

  test('Login with empty password', async ({ page }) => {
    // Submit with empty password
    await page.fill('#username', 'student');
    await page.click('#submit');

    // Verify error message
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your password is invalid');
  });

  test('Login with special characters', async ({ page }) => {
    // Fill in username with special characters
    await page.fill('#username', 'student@#$%');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    // Verify error message
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your username is invalid');
  });

  test('Successful logout after login', async ({ page }) => {
    // Login first
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');

    // Verify successful login
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');

    // Perform logout
    await page.click('text=Log out');

    // Verify back on login page
    await expect(page).toHaveURL(/.*practice-test-login/);
    await expect(page.locator('#username')).toBeVisible();
  });

  test('Password field masks input', async ({ page }) => {
    // Check if password field is of type password
    const passwordField = page.locator('#password');
    await expect(passwordField).toHaveAttribute('type', 'password');
  });
});
