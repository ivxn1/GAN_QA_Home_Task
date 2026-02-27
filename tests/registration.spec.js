import { test, expect } from "@playwright/test";
import { RegistrationModal } from "../pages/RegistrationModal";
import { AccountHistoryPage } from "../pages/AccountHistoryPage";

const DYNAMIC_USER = `user${Math.floor(Math.random() * 10)}`;
const DYNAMIC_EMAIL = `test${Math.floor(Math.random() * 10)}@email.com`;
const PASSWORD = "Pass1234Password!";

test.describe("Registration & Bonus Check", () => {
    
    test.beforeEach(async ({ page }) => {
        const registrationModal = new RegistrationModal(page);
        await registrationModal.navigate("https://jackentertainment.lv-stg.gameaccount.com/");
        await registrationModal.handleInitialPopups();
        await expect(registrationModal.signUpLink).toBeVisible();
    });

    test("New user should register successfully and receive welcome bonus", async ({ page }) => {
        const registrationModal = new RegistrationModal(page);
        const historyPage = new AccountHistoryPage(page);

        // 1. Register
        await registrationModal.register(DYNAMIC_USER, DYNAMIC_EMAIL, PASSWORD);

        // 2. Capture the promised bonus from the "Welcome" screen
        const expectedBonus = await registrationModal.getWelcomeBonusAmount();
        
        // 3. Go back to the site
        await registrationModal.startBtn.click();

        // 4. Verify Bonus in History
        await historyPage.navigateToBonusHistory();
        const actualBonus = await historyPage.getLastBonusWinnings();

        // 5. Final Assertion
        expect(actualBonus).toEqual(expectedBonus);
    });
});