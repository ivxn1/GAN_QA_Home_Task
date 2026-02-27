import { BasePage } from './BasePage';

export class AccountHistoryPage extends BasePage {
    constructor(page) {
        super(page);
        this.historyLink = page.getByRole("link", { name: "Account History" });
        this.bonusTab = page.getByText("BONUS");
        this.historyTables = page.locator('table[class*="HistoryTable_ganTable"]');
    }

    async navigateToBonusHistory() {
        await this.userMenu.click();
        await this.historyLink.click();
        await this.bonusTab.click();
    }

    async getLastBonusWinnings() {
        const lastTable = this.historyTables.last();
        const winningsText = await lastTable.locator('[data-qa="winnnings"]').textContent();
        return Number(winningsText.replace(/,/g, ''));
    }
}