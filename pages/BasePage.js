export class BasePage {
    constructor(page) {
        this.page = page;
        this.rejectCookiesBtn = page.getByRole("button", { name: "Reject All" });
    }

    async navigate(path = "/") {
        await this.page.goto(path);
    }

    async handleInitialPopups() {
        if (await this.rejectCookiesBtn.isVisible()) {
            await this.rejectCookiesBtn.click();
        }
    }
}