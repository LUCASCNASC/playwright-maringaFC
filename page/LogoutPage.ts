import { test, expect, Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar no botao Logout, para fazer logout
  async clickLogout() {
    await this.page.getByTestId('logout').click();
  }

  //validar logout com sucesso FAZER
  async validateLogout() {
    await this.page.getByTestId('logout').click();
  }


  
}