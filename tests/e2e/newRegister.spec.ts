import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../../page/LoginPage';
import { NewRegisterPage } from '../../page/NewRegisterPage';

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

test('Create New Register - pessoa física - masculino', async ({ page }) => {

  await page.goto('/');
  await page.getByRole('link', { name: 'Minha Conta' }).click();
  await page.fill('input.span8[name="email"]', 'meuemail@test.com');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.fill('#id_confirmacao_email', 'meuemail@test.com');
  await page.fill('#id_senha', '@Senha123');
  await page.fill('#id_confirmacao_senha', '@Senha123');

  //dados pessoais
  await page.fill('#id_nome', 'Teste');
  await page.fill('#id_cpf', '12345678912');
  await page.fill('#id_telefone_celular', '44999999999');
  await page.fill('#id_telefone_principal', '44999999999');
  await page.selectOption('#id_sexo', { label: 'Masculino' });
  await page.fill('#id_data_nascimento', '30/10/2000');

  //endereco
  await page.fill('#id_cep', '87065300');
  await page.fill('#id_numero', '1234');

});
