import { test, expect, Page } from '@playwright/test';

export class RegisterUserPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar em Cadastre-se
  async clickCadastreSe() {
    await this.page.getByTestId('cadastrar').click();
  }

  //preenceher campo Nome
  async fillNome(nome:string) {
    await this.page.getByTestId('nome').fill(nome);
  }

  //preenceher campo Email
  async fillEmail(email:string) {
    await this.page.getByTestId('email').fill(email);
  }

  //preenceher campo Senha
  async fillSenha(senha:string) {
    await this.page.getByTestId('password').fill(senha);
  }

  //marcar checkbox Administrador
  async checkAdministrador() {
    await this.page.getByTestId('checkbox').check();
  }

  //clicar em Cadastre, após preencher o formulário
  async clickCadastrar() {
    await this.page.getByTestId('cadastrar').click();
  }

  //validar que o usuário foi cadastrado com sucesso, e está logado
  async validateRegister() {
    await expect(this.page.getByTestId('logout')).toBeVisible();
  }
  

 
}