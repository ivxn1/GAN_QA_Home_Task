import { test, expect } from "@playwright/test";
import { LoginModal } from "../pages/LoginModal";

const STATIC_USER = "testuser30";
const STATIC_EMAIL = "testUser60@email.com";
const PASSWORD = "testUserPass1234";

test.describe("Login Functionality", () => {

    test.beforeEach(async ({ page }) => {
        const loginModal = new LoginModal(page);
        await loginModal.navigate("https://jackentertainment.lv-stg.gameaccount.com/");
        await loginModal.handleInitialPopups();
        await expect(loginModal.loginTrigger).toBeVisible();
    });

    test("User can login successfully using Username", async ({ page }) => {
        const loginModal = new LoginModal(page);
        await loginModal.login(STATIC_USER, PASSWORD);
        
        await expect(page.locator(".Header_iconUserMenu__Esu1M")).toBeVisible();
    });

    test("User can login successfully using Email", async ({ page }) => {
        const loginModal = new LoginModal(page);
        await loginModal.login(STATIC_EMAIL, PASSWORD);
        
        await expect(page.locator(".Header_iconUserMenu__Esu1M")).toBeVisible();
    });
});