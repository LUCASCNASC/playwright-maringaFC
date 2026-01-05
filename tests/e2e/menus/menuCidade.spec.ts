import { test, expect } from '@playwright/test';
import { MenuCidadePage } from '../../../page/menus/MenuCidadePage';

let menuCidadePage: MenuCidadePage;

test.beforeEach(async ({ page }) => {

  menuCidadePage = new MenuCidadePage(page)
  await page.goto('/');
  //await page.locator('.btn-close').click();
  //menuCidadePage.clickACidade();
  await page.locator('a').filter({ hasText: /^A Cidade$/ }).click();

});

test('A Cidade -> Bandeira', async ({ page }) => {

  menuCidadePage.clickBandeira();
  await page.getByRole('heading', { name: 'Bandeira' }).isVisible();
  await page.getByRole('heading', { name: 'Bandeira do Município' }).isVisible();
});

test('A Cidade -> Brasão', async ({ page }) => {

  menuCidadePage.clickBrasao();
  await page.getByRole('heading', { name: 'Brasão' }).isVisible();
  await page.getByRole('heading', { name: 'Brasão do Município' }).isVisible();
});

test('A Cidade -> Cadastur', async ({ page }) => {

  menuCidadePage.clickCadastur();
  await page.getByRole('heading', { name: 'Nossa cidade' }).isVisible();
  await page.getByRole('heading', { name: 'Cadastur' }).isVisible();
});

test('A Cidade -> Demografia', async ({ page }) => {

  menuCidadePage.clickDemografia();
  await page.getByRole('heading', { name: 'Nossa cidade' }).isVisible();
  await page.getByRole('heading', { name: 'Demografia' }).isVisible();
});

test('A Cidade -> Embarque/Desembarque Rodoviária', async ({ page }) => {

  menuCidadePage.clickEmbarqueDesembarqueRodoviaria();
  await page.getByRole('heading', { name: 'Embarque/Desembarque Rodoviária' }).isVisible();
  await page.getByRole('heading', { name: 'Acostamento de Ônibus Turismo Rodoviária' }).isVisible();
});

test('A Cidade -> Galeria de Arte', async ({ page }) => {

  menuCidadePage.clickGaleriaDeArte();
  await page.getByRole('heading', { name: 'Galeria de Arte' }).isVisible();
  await page.getByRole('heading', { name: 'Galeria de Arte Shopping Av. Centro' }).isVisible();
});

test('A Cidade -> Hino', async ({ page }) => {

  menuCidadePage.clickHino();
  await page.getByRole('heading', { name: 'Hino' }).isVisible();
  await page.getByRole('heading', { name: 'Hino de Maringá' }).isVisible();
});

test('A Cidade -> Histórico do Município', async ({ page }) => {

  menuCidadePage.clickHistoricoDoMunicipio()
  await page.getByRole('heading', { name: 'Histórico do Município' }).isVisible();
  await page.getByRole('heading', { name: 'Histórico do Município' }).isVisible();
});

test('A Cidade -> Maringá - Cidade Canção 🎵', async ({ page }) => {

  menuCidadePage.clickCidadeCancao();
  await page.getByRole('heading', { name: 'Maringá - Cidade Canção 🎵' }).isVisible();
  await page.getByRole('heading', { name: 'Canção à Maringá' }).isVisible();
});

test('A Cidade -> Maringá em Rotas', async ({ page }) => {

  menuCidadePage.clickMaringaEmRotas();
  await page.getByRole('heading', { name: 'Maringá em Rotas' }).isVisible();
  await page.getByRole('heading', { name: 'Tour pela cidade' }).isVisible();
});

test('A Cidade -> Nossa Cidade', async ({ page }) => {

  menuCidadePage.clickNossaCidade();
  await page.getByRole('heading', { name: 'Nossa Cidade' }).isVisible();
  await page.getByRole('heading', { name: 'Maringá' }).isVisible();
});

test('A Cidade -> Plano Municipal de Turismo 2023/2033', async ({ page }) => {
  
  menuCidadePage.clickPlanoMunicipalDeTurismo();
  await page.getByRole('heading', { name: 'Plano Municipal de Turismo 2023/2033' }).isVisible();
  await page.getByRole('heading', { name: 'Plano Municipal de Turismo 2023/2033' }).isVisible();
});