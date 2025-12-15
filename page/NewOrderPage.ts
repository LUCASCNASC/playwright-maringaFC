import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar no botão Minha Conta
  async clickMinhaConta() {
    await this.page.locator('text=Minha Conta').click();;
  }

}