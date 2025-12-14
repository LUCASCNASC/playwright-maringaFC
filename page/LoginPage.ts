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

  //preencher campo Email
  async fillEmail(email:string) {
    await this.page.fill('#email', email);
  }

  //preencher campo Senha
  async fillSenha(senha:string) {
    await this.page.fill('#id_senha', senha);
  }

  //clicar no botão Prosseguir
  async clickProsseguir() {
    await this.page.getByRole('button', { name: 'Prosseguir' }).click();
  }
}