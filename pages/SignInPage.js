class SignInPage {
    constructor(page) {
        this.page = page;
        
        // Locators
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
    }

    /**
     * Navigate to the login page
     */
    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }

    /**
     * Fill in the username
     * @param {string} username 
     */
    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    /**
     * Fill in the password
     * @param {string} password 
     */
    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    /**
     * Click the login button
     */
    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    /**
     * Perform complete login flow
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = SignInPage; 