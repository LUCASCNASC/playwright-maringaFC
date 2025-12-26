import { test, expect } from '@playwright/test';
import { CidadaoPage } from '../../../page/acesso_rapido/CidadaoPage';

let cidadaoPage: CidadaoPage;

test.beforeEach(async ({ page }) => {
  cidadaoPage = new CidadaoPage(page)
  
  await page.goto('/');
  //await page.locator('.btn-close').click();
  cidadaoPage.clickCidadao();
});

test('Cidadão -> Farmácia Móvel', async ({ page }) => {
  await cidadaoPage.clickFarmaciaMovel();
});

test('Cidadão -> Resid. Médica Edital 2026', async ({ page }) => {
  //await cidadaoPage.clickFarmaciaMovel();
});

test('Cidadão -> PSS Educação 2025', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> PSS Saúde 2025', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Agenda Previsão de Pagamento', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Vacinação', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> leis do Município', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Estágio', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Carta de Serviços', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> SEI', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Passe do Estudante', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Consulta Concursos', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Diário Oficial', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> EMISSÃO DE GUIAS/BOLETOS', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Emissão de Certidões', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Plano Diretor 2020-2030', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> FAQ - LGPD', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Portal Maringá compra', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Notifica Saúde', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Portal Saúde Maringá', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Sala digital do microempreendedor', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Agencia do Trabalhador', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Vacinação Covid-19', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Acesso a Informação', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});

test('Cidadão -> Portal Covid-19', async ({ page }) => {
  //await menuInicioPage.clickInicio();
});