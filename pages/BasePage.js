export class BasePage {
    constructor(page) {
        this.page = page;
        this.userMenu = page.locator('span[data-qa="expand_account_menu"]');
        this.rejectCookiesBtn = page.locator("#onetrust-reject-all-handler");
    }

    async navigate(path = "/") {
        await this.page.goto(path);
    }

    async handleInitialPopups() {
        if (await this.rejectCookiesBtn.isVisible() && await this.rejectCookiesBtn.isEnabled()) {
            await this.rejectCookiesBtn.click();
        }
    }
}