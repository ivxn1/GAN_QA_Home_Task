import { test, expect } from "@playwright/test";
import { LoginModal } from "../pages/LoginModal";

const STATIC_USER = "testuser30";
const STATIC_EMAIL = "testUser60@email.com";
const PASSWORD = "testUserPass1234";

test.describe("Login Functionality", () => {
    test.beforeEach(async ({ page }) => {
        const loginModal = new LoginModal(page);

        await loginModal.navigate();
        await expect(loginModal.loginTrigger).toBeVisible();
    });

    test("User can login successfully using Username", async ({ page }) => {
        const loginModal = new LoginModal(page);
        await loginModal.login(STATIC_USER, PASSWORD);

        await page.waitForTimeout(2000);
        await page.waitForLoadState('domcontentloaded');
        await page.waitForLoadState('networkidle');

        const displayedName = await loginModal.getLoggedInUsername();
        expect(displayedName).toContain(STATIC_USER);
    });

    test("User can login successfully using Email", async ({ page }) => {
        const loginModal = new LoginModal(page);
        await loginModal.login(STATIC_EMAIL, PASSWORD);

        await page.waitForTimeout(2000);
        await page.waitForLoadState('domcontentloaded');
        await page.waitForLoadState('networkidle');
        
        const displayedName = await loginModal.getLoggedInUsername();
        expect(displayedName).toContain(STATIC_USER);
    });
});
