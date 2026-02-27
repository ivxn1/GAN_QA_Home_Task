import { BasePage } from './BasePage';

export class LoginModal extends BasePage {
    constructor(page) {
        super(page);
        this.loginTrigger = page.getByText("Login");
        this.emailInput = page.locator("#email");
        this.passwordInput = page.locator("#password");
        this.loginBtn = page.getByRole("button", { name: "Login", exact: true });
    }

    async login(identifier, password) {
        await this.loginTrigger.click();
        await this.emailInput.fill(identifier);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}