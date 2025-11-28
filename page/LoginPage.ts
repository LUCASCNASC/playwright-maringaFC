import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickMinhaConta() {
    await this.page.getByRole('link', { name: 'Minha Conta' }).click();
  }

}
