import { test, expect } from "@playwright/test";
import { LoginModal } from "../pages/LoginModal";

const STATIC_USER = "testuser30";
const STATIC_EMAIL = "testUser60@email.com";
const PASSWORD = "testUserPass1234";

test.describe("Login Functionality", () => {

    test.beforeEach(async ({ page }) => {
        const loginModal = new LoginModal(page);
        
        await test.step("Navigate to site and clear popups", async () => {
            await loginModal.navigate("https://jackentertainment.lv-stg.gameaccount.com/");
            await loginModal.handleInitialPopups();
            await expect(loginModal.loginTrigger).toBeVisible();
        });
    });

    test("User can login successfully using Username", async ({ page }) => {
        const loginModal = new LoginModal(page);

        await test.step(`Attempt login with username: ${STATIC_USER}`, async () => {
            await loginModal.login(STATIC_USER, PASSWORD);
        });
        
        await test.step("Verify username appears correctly in the side menu", async () => {
            const displayedName = await loginModal.getLoggedInUsername();
            expect(displayedName).toContain(STATIC_USER);
        });
    });

    test("User can login successfully using Email", async ({ page }) => {
        const loginModal = new LoginModal(page);

        await test.step(`Attempt login with email: ${STATIC_EMAIL}`, async () => {
            await loginModal.login(STATIC_EMAIL, PASSWORD);
        });
        
        await test.step("Verify username appears correctly in the side menu after email login", async () => {
            const displayedName = await loginModal.getLoggedInUsername();
            expect(displayedName).toContain(STATIC_USER);
        });
    });
});
