import { test, expect } from '@playwright/test';
import { RegisterUser } from '../../page/RegisterUser';

let registerUser: RegisterUser;

test.beforeEach(async ({ page }) => {
  registerUser = new RegisterUser(page)
  
  await page.goto('/');
  //registerUser.clickCadastreSe();
  await page.getByTestId('cadastrar').click();
});

test('Register User', async ({ page }) => {

  
});

