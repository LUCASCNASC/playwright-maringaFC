import { test, expect, Page } from '@playwright/test';

export class MenuInicioPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar no menu Início
  async clickInicio() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }
}