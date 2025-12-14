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

  //preencher campo Email
  async fillEmail(email:string) {
    await this.page.fill('input.span8[name="email"]', 'meuemail@test.com');
  }

  //clicar botão Cadastrar
  async clickCadastrar() {
    await this.page.getByRole('button', { name: 'Cadastrar' }).click();
  }

  //preencher campo Confirmar Email
  async fillConfirmEmail(confirmEmail:string) {
    await this.page.fill('#id_confirmacao_email', 'meuemail@test.com');
  }

  //preencher campo Senha
  async fillSenha(senha:string) {
    await this.page.fill('#id_senha', '@Senha123');
  }

  //preencher campo Confirmar Email
  async fillConfirmSenha(confirmSenha:string) {
    await this.page.fill('#id_confirmacao_senha', '@Senha123');
  }

  //dados pessoais
  async fillNomeCompleto(senha:string) {
    await this.page.fill('#id_nome', 'Teste');
  }

  //preencher campo CPF
  async fillCPF(senha:string) {
    await this.page.fill('#id_cpf', '12345678912');
  }

  //preencher campo Celular
  async fillCelular(senha:string) {
    await this.page.fill('#id_telefone_celular', '44999999999');
  }

  //preencher campo Telefone Fixo
  async fillTelefoneFixo(senha:string) {
    await this.page.fill('#id_telefone_principal', '44999999999');
  }

  //Selecionar opção Masculino
  async selectSexMasculino() {
    await this.page.selectOption('#id_sexo', { label: 'Masculino' });
  }

  //Selecionar opção Feminino
  async selectSexFeminino() {
    await this.page.selectOption('#id_sexo', { label: 'Feminino' });
  }

  //preencher campo Data de Nascimento
  async fillDataNascimento(senha:string) {
    await this.page.fill('#id_data_nascimento', '30/10/2000');
  }

  //Endereço

  //preencher campo CEP
  async fillCEP(senha:string) {
    await this.page.fill('#id_cep', '87065300');
  }

  //preencher campo eNDEREÇO
  async fillEndereco(senha:string) {
    await this.page.fill('#id_endereco', 'Rua Petunia');
  }

  //preencher campo Número
  async fillNumero(senha:string) {
    await this.page.fill('#id_numero', '1234');
  }

  //preencher campo Complemento
  async fillComplemento(senha:string) {
    await this.page.fill('#id_complemento', 'Perto da UBS');
  }

  //preencher campo Referencia
  async fillReferencia(senha:string) {
    await this.page.fill('#id_referencia', 'Parque do Japão');
  }

  //preencher campo Bairro
  async fillBairro(senha:string) {
    await this.page.fill('#id_bairro', 'Jardim Teste');
  }

  //preencher campo Cidade
  async fillCidade(senha:string) {
    await this.page.fill('#id_cidade', 'Maringá');
  }

  //selecionar estado Paraná
  async selectEstadoParana() {
    await this.page.selectOption('#id_estado', { label: 'Paraná' });
  }
}