import { test, expect, Page } from '@playwright/test';

export class RegisterUser {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar em Cadastre-se
  async clickCadastreSe() {
    await this.page.getByTestId('cadastrar').click();
  }

 
}