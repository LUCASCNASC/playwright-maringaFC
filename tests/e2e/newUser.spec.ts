import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterUserPage } from '../../page/RegisterUserPage';
import { register } from 'module';

let registerUser: RegisterUserPage;

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password({ length: 12 });

test.beforeEach(async ({ page }) => {
  registerUser = new RegisterUserPage(page)
  
  await page.goto('/');
  //registerUser.clickCadastreSe();
  await page.getByTestId('cadastrar').click();
});

test('Register User Sucess', async ({ page }) => {
  registerUser.fillNome(nome);
  registerUser.fillEmail(email);
  registerUser.fillSenha(senha);
  registerUser.checkAdministrador();
  registerUser.clickCadastrar();
  registerUser.validateRegister();

});

