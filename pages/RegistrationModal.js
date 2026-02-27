import { BasePage } from './BasePage';

export class RegistrationModal extends BasePage {
    constructor(page) {
        super(page);
        this.signUpLink = page.getByRole("link", { name: "Sign up" });
        this.usernameInput = page.locator("#username");
        this.emailInput = page.locator("#email");
        this.passwordInput = page.locator("#password");
        this.getChipsBtn = page.getByRole("button", { name: "Get my free chips" });
        this.termsContainer = page.locator("[class*='RegistrationModal_termsWrap']");
        this.termsCheckbox = page.getByText("By submitting my registration");
        this.continueBtn = page.getByRole("button", { name: "Continue" });
        this.welcomeBonusText = page.getByText(/CHIPS\+ \d+/);
        this.startBtn = page.getByRole("button", { name: "Let's start" });
    }

    async register(user, email, pass) {
        await this.signUpLink.click();
        await this.usernameInput.fill(user);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.getChipsBtn.click();

        await this.termsCheckbox.scrollIntoViewIfNeeded()
        await this.termsCheckbox.click();
        await this.continueBtn.click();
    }

    async getWelcomeBonusAmount() {
        const text = await this.welcomeBonusText.textContent();
        return Number(text.split(" ")[0].split(",").join(""));
    }
}