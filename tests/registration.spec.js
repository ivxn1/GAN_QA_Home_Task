import { test, expect } from "@playwright/test";
import { RegistrationModal } from "../pages/RegistrationModal";
import { AccountHistoryPage } from "../pages/AccountHistoryPage";

const DYNAMIC_USER = `user${Math.floor(Math.random() * 10)}`;
const DYNAMIC_EMAIL = `test${Math.floor(Math.random() * 10)}@email.com`;
const PASSWORD = "Pass1234Password!";

test.describe("Registration & Bonus Check", () => {
    test.beforeEach(async ({ page }) => {
        const registrationModal = new RegistrationModal(page);
        await registrationModal.navigate(
            "https://jackentertainment.lv-stg.gameaccount.com/",
        );
        await registrationModal.handleInitialPopups();
        await expect(registrationModal.signUpLink).toBeVisible();
    });

    test("New user should register successfully and receive welcome bonus", async ({
        page,
    }) => {
        const registrationModal = new RegistrationModal(page);
        const historyPage = new AccountHistoryPage(page);

        test.step("Fill registration form and confirm T&C", async () => {
            await registrationModal.register(
                DYNAMIC_USER,
                DYNAMIC_EMAIL,
                PASSWORD,
            );
        });

        test.step("Read welcome bonus value from post-registration modal", async () => {
            const expectedBonus =
                await registrationModal.getWelcomeBonusAmount();
            await registrationModal.startBtn.click();
        });

        test.step("Navigate to account bonus history", async () => {
            await historyPage.navigateToBonusHistory();
            const actualBonus = await historyPage.getLastBonusWinnings();
        });

        test.step("Compare registrating bonus from the start with bonus in history", async () => {
            expect(actualBonus).toEqual(expectedBonus);
        });
    });
});
