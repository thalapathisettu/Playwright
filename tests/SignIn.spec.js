const { test, expect } = require('@playwright/test');
const SignInPage = require('../pages/SignInPage');
const DashboardPage = require('../pages/DashboardPage');

test.describe('OrangeHRM Login and Dashboard Test', () => {
    test('Should login successfully and validate dashboard elements', async ({ page }) => {
        // Initialize page objects
        const signInPage = new SignInPage(page);
        const dashboardPage = new DashboardPage(page);

        // Test data
        const username = 'Admin';
        const password = 'admin123';

        // 1. Navigate to the login page
        await signInPage.navigate();

        // 2. Perform login
        await signInPage.login(username, password);

        // 3. Validate dashboard elements
        const dashboardValidation = await dashboardPage.validateDashboard();

        // Assertions
        expect(dashboardValidation.isProfileVisible, 'User profile dropdown should be visible')
            .toBe(true);
        
        expect(dashboardValidation.isTimeWidgetVisible, 'Time at Work widget should be visible')
            .toBe(true);
        
        expect(dashboardValidation.userName, 'Username should not be empty')
            .toBeTruthy();

        console.log('Dashboard Validation Results:', {
            profileVisible: dashboardValidation.isProfileVisible,
            timeWidgetVisible: dashboardValidation.isTimeWidgetVisible,
            userName: dashboardValidation.userName
        });
    });
}); 