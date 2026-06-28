import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.loginAsValidUser();

})