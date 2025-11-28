import { test, expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const address = faker.location.streetAddress();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const phone = faker.phone.number();
const ssn = faker.string.numeric(9);
const username = faker.internet.username();
const password = faker.internet.password({ length: 10 });

export class NewRegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillEmail(email:string) {
    await this.page.fill('input.span8[name="email"]', 'meuemail@test.com');
  }

  async clickCadastrar() {
    await this.page.getByRole('button', { name: 'Cadastrar' }).click();
  }

  async fillConfirmEmail(confirmEmail:string) {
    await this.page.fill('#id_confirmacao_email', 'meuemail@test.com');
  }

  async fillSenha(senha:string) {
    await this.page.fill('#id_senha', '@Senha123');
  }

  async fillConfirmSenha(confirmSenha:string) {
    await this.page.fill('#id_confirmacao_senha', '@Senha123');
  }

  //dados pessoais
  async fillNomeCompleto(senha:string) {
    await this.page.fill('#id_nome', 'Teste');
  }

  async fillCPF(senha:string) {
    await this.page.fill('#id_cpf', '12345678912');
  }

  async fillCelular(senha:string) {
    await this.page.fill('#id_telefone_celular', '44999999999');
  }

  async fillTelefoneFixo(senha:string) {
    await this.page.fill('#id_telefone_principal', '44999999999');
  }

  async selectSexMasculino() {
    await this.page.selectOption('#id_sexo', { label: 'Masculino' });
  }

  async selectSexFeminino() {
    await this.page.selectOption('#id_sexo', { label: 'Feminino' });
  }

  async fillDataNascimento(senha:string) {
    await this.page.fill('#id_data_nascimento', '30/10/2000');
  }

  //Endereço
  
  

  async fillCEP(senha:string) {
    await this.page.fill('#id_cep', '87065300');
  }

  async fillEndereco(senha:string) {
    await this.page.fill('#id_endereco', 'Rua Petunia');
  }

  async fillNumero(senha:string) {
    await this.page.fill('#id_numero', '1234');
  }

  async fillComplemento(senha:string) {
    await this.page.fill('#id_complemento', 'Perto da UBS');
  }

  async fillReferencia(senha:string) {
    await this.page.fill('#id_referencia', 'Parque do Japão');
  }

  async fillBairro(senha:string) {
    await this.page.fill('#id_bairro', 'Jardim Teste');
  }

  async fillCidade(senha:string) {
    await this.page.fill('#id_cidade', 'Maringá');
  }

  async selectEstado() {
    await this.page.selectOption('#id_estado', { label: 'Paraná' });
  }


}
