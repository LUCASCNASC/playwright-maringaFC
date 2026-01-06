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
  await cidadaoPage.clickResidMedicaEdital();
});

test('Cidadão -> PSS Educação 2025', async ({ page }) => {
  await cidadaoPage.clickPSSEducacao();
});

test('Cidadão -> PSS Saúde 2025', async ({ page }) => {
  await cidadaoPage.clickPSSSaude();
});

test.skip('Cidadão -> Sistema Elotech Oxy', async ({ page }) => {
  await cidadaoPage.clickSistemaElotechOxy();
});

test('Cidadão -> Agenda Previsão de Pagamento', async ({ page }) => {
  await cidadaoPage.clickAgendaPrevisaoPagamento();
});

test.skip('Cidadão -> Vacinação', async ({ page }) => {
  await cidadaoPage.clickVacinacao();
});

test('Cidadão -> leis do Município', async ({ page }) => {
  await cidadaoPage.clickLeisMunicipio();
});

test('Cidadão -> Estágio', async ({ page }) => {
  await cidadaoPage.clickEstagio();
});

test.skip('Cidadão -> S.I.M', async ({ page }) => {
  await cidadaoPage.clickSIM();
});

test.skip('Cidadão -> Carta de Serviços', async ({ page }) => {
  await cidadaoPage.clickCartaServiços();
});

test('Cidadão -> SEI', async ({ page }) => {
  await cidadaoPage.clickSEI();
});

test('Cidadão -> Passe do Estudante', async ({ page }) => {
  await cidadaoPage.clickPasseEstudante();
});

test.skip('Cidadão -> ISS Eletrônico', async ({ page }) => {
  await cidadaoPage.clickISSEletronico();
});

test('Cidadão -> Consulta Concursos', async ({ page }) => {
  await cidadaoPage.clickConsultaConcursos();
});

test('Cidadão -> Diário Oficial', async ({ page }) => {
  await cidadaoPage.clickDiArioOficial();
});

test('Cidadão -> EMISSÃO DE GUIAS/BOLETOS', async ({ page }) => {
  await cidadaoPage.clickEmissaoGuiasBoletos();
});

test('Cidadão -> Emissão de Certidões', async ({ page }) => {
  await cidadaoPage.clickEmissaoCertidoes();
});

test('Cidadão -> Plano Diretor 2020-2030', async ({ page }) => {
  await cidadaoPage.clickPlanoDiretor();
});

test('Cidadão -> FAQ - LGPD', async ({ page }) => {
  await cidadaoPage.clickFaqLGPD();
});

test('Cidadão -> Portal Maringá compra', async ({ page }) => {
  await cidadaoPage.clickPortalMaringaCompra();
});

test('Cidadão -> Notifica Saúde', async ({ page }) => {
  await cidadaoPage.clickNotificaSaude();
});

test('Cidadão -> Portal Saúde Maringá', async ({ page }) => {
  await cidadaoPage.clickPortalSaudeMaringa();
});

test('Cidadão -> Sala digital do microempreendedor', async ({ page }) => {
  await cidadaoPage.clickSalaDigitalMicroempreendedor();
});

test('Cidadão -> Agencia do Trabalhador', async ({ page }) => {
  await cidadaoPage.clickAgenciaTrabalhador();
});

test('Cidadão -> Vacinação Covid-19', async ({ page }) => {
  await cidadaoPage.clickVacinacaoCovid19();
});

test.skip('Cidadão -> Acesso a Informação', async ({ page }) => {
  await cidadaoPage.clickAcessoInformacao();
});

test('Cidadão -> Portal Covid-19', async ({ page }) => {
  await cidadaoPage.clickPortalCovid19();
});