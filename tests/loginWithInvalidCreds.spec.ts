import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
        process.env.INVALID_USERNAME!,
        process.env.INVALID_PASSWORD!
    );
     await expect(await loginPage.getSuccessMessage()).toContain('Your username is invalid!');
});