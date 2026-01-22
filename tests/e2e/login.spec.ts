import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../../page/LoginPage';
import users from '../../data/users.json';
import { register } from 'module';

let loginPage: LoginPage;

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password({ length: 12 });

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
  
  await page.goto('/');
});

test('Register User Sucess', async ({ page }) => {
  
  loginPage.fillEmail(users.EMAIL_USER_VALID);
  loginPage.fillSenha(users.SENHA_USER_VALID);
  loginPage.clickEntrar();

  

});

