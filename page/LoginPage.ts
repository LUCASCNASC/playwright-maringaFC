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

  async clickAcessar() {
    await this.page.getByRole('button', { name: 'Acessar' }).click();
    await expect(this.page.getByText('Saldo em conta')).toBeVisible();
  }
}