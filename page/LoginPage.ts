import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //preenceher campo Email
  async fillEmail(email: string) {
    await this.page.getByTestId('email').fill(email);
  }

  //preenceher campo Senha
  async fillSenha(senha: string) {
    await this.page.getByTestId('senha').fill(senha);
  } 


  
}