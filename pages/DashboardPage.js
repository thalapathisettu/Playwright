class DashboardPage {
    constructor(page) {
        this.page = page;
        
        // Locators
        this.userDropdown = '.oxd-userdropdown-tab';
        this.timeAtWorkWidget = '.orangehrm-attendance-card';
        this.userNameText = '.oxd-userdropdown-name';
    }

    /**
     * Check if user profile dropdown is visible
     * @returns {Promise<boolean>}
     */
    async isProfileDropdownVisible() {
        return await this.page.isVisible(this.userDropdown);
    }

    /**
     * Check if Time at Work widget is visible
     * @returns {Promise<boolean>}
     */
    async isTimeAtWorkWidgetVisible() {
        return await this.page.isVisible(this.timeAtWorkWidget);
    }

    /**
     * Get the username text from header
     * @returns {Promise<string>}
     */
    async getUserName() {
        return await this.page.textContent(this.userNameText);
    }

    /**
     * Wait for dashboard to load
     */
    async waitForDashboardLoad() {
        await this.page.waitForSelector(this.timeAtWorkWidget, { state: 'visible' });
    }

    /**
     * Validate all dashboard elements
     * @returns {Promise<Object>} Object containing validation results
     */
    async validateDashboard() {
        await this.waitForDashboardLoad();
        
        return {
            isProfileVisible: await this.isProfileDropdownVisible(),
            isTimeWidgetVisible: await this.isTimeAtWorkWidgetVisible(),
            userName: await this.getUserName()
        };
    }
}

module.exports = DashboardPage; 