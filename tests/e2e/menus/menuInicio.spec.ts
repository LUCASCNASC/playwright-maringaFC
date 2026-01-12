import { test, expect } from '@playwright/test';
import { MenuInicioPage } from '../../../page/menus/MenuInicioPage';

let menuInicioPage: MenuInicioPage;

test.beforeEach(async ({ page }) => {
  menuInicioPage = new MenuInicioPage(page)
  
  await page.goto('/');
  //await page.locator('.btn-close').click();
});

test('Inicio', async ({ page }) => {
  
  await menuInicioPage.clickInicio();
});