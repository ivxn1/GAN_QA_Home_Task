import { test, expect } from "@playwright/test";
import { RegistrationModal } from "../pages/RegistrationModal";
import { AccountHistoryPage } from "../pages/AccountHistoryPage";

const PASSWORD = "Pass1234Password!";

test.describe("Registration & Bonus Check", () => {
    test.beforeEach(async ({ page }) => {
        const registrationModal = new RegistrationModal(page);
        await registrationModal.navigate();
        await expect(registrationModal.signUpLink).toBeVisible();
    });

    test("New user should register successfully and receive welcome bonus", async ({
        page,
    }) => {
        const registrationModal = new RegistrationModal(page);
        const historyPage = new AccountHistoryPage(page);
        // Generate unique credentials for each test run
        const user = `test38${Math.floor(Math.random() * 10)}`;
        const email = `testing38${Math.floor(Math.random() * 10)}@email.com`;

        await expect(registrationModal.rejectCookiesBtn).toBeVisible();
        await registrationModal.handleInitialPopups();

        await expect(registrationModal.signUpLink).toBeVisible();
        await registrationModal.register(
            user,
            email,
            PASSWORD,
        );

        await page.waitForLoadState('networkidle') 

        await expect(registrationModal.startBtn).toBeVisible();
        await registrationModal.startBtn.click();
        await expect(registrationModal.userMenu).toBeVisible();

        await historyPage.navigateToBonusHistory();
        const actualBonus = await historyPage.getLastBonusWinnings();
        expect(actualBonus).toEqual(5000);
    });
});
