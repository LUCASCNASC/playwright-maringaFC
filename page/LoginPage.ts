import { test, expect, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //preencher campo Email
  async fillEmail(email: string) {
    await this.page.getByTestId('email').fill(email);
  }

  //preencher campo Senha
  async fillSenha(senha: string) {
    await this.page.getByTestId('senha').fill(senha);
  } 

  //clicar no botao Entrar, para fazer login
  async clickEntrar() {
    await this.page.getByTestId('entrar').click();
  }


  
}