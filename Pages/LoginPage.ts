import { Page } from '@playwright/test';

export class LoginPage {

    constructor(public page: Page) {}

    async navigateToLoginPage() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async getSuccessMessage() {
        return await this.page.locator('#flash').textContent();
    }

    async loginAsValidUser() {
    await this.login(
        process.env.APP_USERNAME!,
        process.env.APP_PASSWORD!
    );
}

}