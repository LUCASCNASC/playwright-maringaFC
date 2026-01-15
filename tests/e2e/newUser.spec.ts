import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterUser } from '../../page/RegisterUser';
import { register } from 'module';

let registerUser: RegisterUser;

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password({ length: 12 });

test.beforeEach(async ({ page }) => {
  registerUser = new RegisterUser(page)
  
  await page.goto('/');
  //registerUser.clickCadastreSe();
  await page.getByTestId('cadastrar').click();
});

test('Register User', async ({ page }) => {

  registerUser.fillNome(nome);
  registerUser.fillEmail(email);
  registerUser.fillSenha(senha);
  registerUser.checkAdministrador();
  registerUser.clickCadastrar();
  registerUser.validateRegister();
  
  
  
});

