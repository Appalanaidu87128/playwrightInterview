import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        process.env.APP_USERNAME!,
        process.env.APP_PASSWORD!
    );
     await expect(await loginPage.getSuccessMessage()).toContain('You logged into a secure area!');
});