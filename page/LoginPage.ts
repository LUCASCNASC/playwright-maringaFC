import { Page, expect } from '@playwright/test';
import users from '../tests/data/users.json';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillEmail() {
    await this.page.locator('input[name="email"]').fill(users.validUser.email);
  }

  async fillPassword() {
    await this.page.locator('input[type="password"]').fill(users.validUser.password);
  }

  async clickSignin() {
    await this.page.click('button[type="submit"]');
    await expect(this.page.getByText('Projects')).toBeVisible();
  }
}