import { test, expect } from '@playwright/test';
import { MenuSecretariasPage } from '../../../page/menus/MenuSecretariasPage';

let menuSecretariasPage: MenuSecretariasPage;

test.beforeEach(async ({ page }) => {
  menuSecretariasPage = new MenuSecretariasPage(page)

  await page.goto('/');
  //await page.locator('.btn-close').click();
  //menuSecretariasPage.clickSecretarias();
  await page.locator('a').filter({ hasText: 'Secretarias' }).first().click();
});

test('Secretarias -> Prefeitos', async ({ page }) => {
  
  menuSecretariasPage.clickPrefeitos();
  await page.getByRole('heading', { name: 'Prefeitos' }).isVisible();
});

test('Secretarias -> Estrutura Organizacional / Organograma', async ({ page }) => {

  menuSecretariasPage.clickEstruturaOrganizacionalOrganograma();
  await page.getByRole('heading', { name: 'Estrutura Organizacional' }).isVisible();
});

//necessário investigar a partir desse ponto, pois provavelmente devemos selecionar cada submenu por ordem, e não clicar diretamente em secretaria e clicar em outro submenu.
test('Secretarias -> Secretaria -> Gabinete do Prefeito', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuGabinetePrefeito();
  //await page.getByRole('heading', { name: 'Gabinete de Prefeito' }).isVisible();
});

test('Secretarias -> Secretaria -> Aceleração Econômica E Turismo', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuAceleracaoEconomicaTurismo();
  //await page.getByRole('heading', { name: 'Secretaria Municipal de Aceleração Econômica e Turismo' }).isVisible();
});

test('Secretarias -> Secretaria -> Aeroporto', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuAeroporto();
  //await page.getByRole('heading', { name: 'Aeroporto' }).isVisible();
});

test('Secretarias -> Secretaria -> Agência Maringaense de Regulação - AMR', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuAgenciaMaringaenseDeRegulacaoAMR();
  //await page.getByRole('heading', { name: 'Agência Maringaense de Regulação' }).isVisible();
});

test('Secretarias -> Secretaria -> Assistência Social', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuAssistenciaSocial();
  //await page.getByRole('heading', { name: 'Secretaria Municipal de Assistência Social' }).isVisible();
});

test('Secretarias -> Secretaria -> Assuntos Metropolitanos e Comunitários', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuAssuntosMetropolitanosComunitarios();
  //await page.getByRole('heading', { name: 'Secretaria de Assuntos Metropolitanos' }).isVisible();
});

test('Secretarias -> Secretaria -> Chefia de Gabinete', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuChefiaGabinete();
  //await page.getByRole('heading', { name: 'Chefia de Gabinete do Prefeito' }).isVisible();
});

test('Secretarias -> Secretaria -> Compliance E Controle', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuComplianceControle();
  //await page.getByRole('heading', { name: 'Secretaria de Compliance e Controle' }).isVisible();
});

test('Secretarias -> Secretaria -> Comunicação', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuComunicacao();
  //await page.getByRole('heading', { name: 'Secretaria de Comunicação' }).isVisible();
});

test('Secretarias -> Secretaria -> Criança e do Adolescente', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuCriancaAdolescente();
  //await page.getByRole('heading', { name: 'Secretaria da Criança e do Adolescente' }).isVisible();
});

test('Secretarias -> Secretaria -> Cultura', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuCultura();
  //await page.getByRole('heading', { name: 'Secretaria de Cultura' }).isVisible();
});

test('Secretarias -> Secretaria -> Educação', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuEducacao();
  //await page.getByRole('heading', { name: 'Secretaria de Educação' }).isVisible();
});

test('Secretarias -> Secretaria -> Esportes e Lazer', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuEsportesLazer();
  //await page.getByRole('heading', { name: 'Secretaria de Esportes e Lazer' }).isVisible();
});

test('Secretarias -> Secretaria -> Fazenda', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuFazenda();
  //await page.getByRole('heading', { name: 'Secretaria de Fazenda' }).isVisible();
});

test('Secretarias -> Secretaria -> Gestão De Pessoas', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuGestaoPessoas();
  //await page.getByRole('heading', { name: 'Gestão de Pessoas' }).isVisible();
});

test('Secretarias -> Secretaria -> Governo', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuGoverno();
  //await page.getByRole('heading', { name: 'Secretaria de Governo' }).isVisible();
});

test('Secretarias -> Secretaria -> Infraestrutura', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuInfraestrutura();
  //await page.getByRole('heading', { name: 'Secretaria de Infraestrutura' }).isVisible();
});

test('Secretarias -> Secretaria -> Instituto Ambiental de Maringá', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuInstitutoAmbientalMaringa();
  //await page.getByRole('heading', { name: 'Instituto Ambiental de Maringá' }).isVisible();
});

test('Secretarias -> Secretaria -> Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuInstitutoDePesquisaPlanejamentoUrbanoMaringaIPPLAM();
  //await page.getByRole('heading', { name: 'Instituto de Pesquisa e Planejamento Urbano de Maringá' }).isVisible();
});

test('Secretarias -> Secretaria -> Juventude Cidadania E Migrantes', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuJuventudeCidadaniaMigrantes();
  //await page.getByRole('heading', { name: 'Secretaria de Juventude, Cidadania e Migrantes' }).isVisible();
});

test('Secretarias -> Secretaria -> Limpeza Urbana', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuLimpezaUrbana();
  //await page.getByRole('heading', { name: 'Secretaria de Limpeza Urbana' }).isVisible();
});

test('Secretarias -> Secretaria -> Logística E Compras', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuLogisticaCompras();
  //await page.getByRole('heading', { name: 'Secretaria Municipal Logística e Compras' }).isVisible();
});

test('Secretarias -> Secretaria -> Maringá Previdência', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuMaringaPrevidencia();
  //await page.getByRole('heading', { name: 'Maringá Previdência' }).isVisible();
});

test('Secretarias -> Secretaria -> Mobilidade Urbana', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuMobilidadeUrbana();
  //await page.getByRole('heading', { name: 'Secretaria de Mobilidade Urbana' }).isVisible();
});

test('Secretarias -> Secretaria -> Obras Públicas', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuObrasPublicas();
  //await page.getByRole('heading', { name: 'Secretaria de Obras Públicas' }).isVisible();
});

test('Secretarias -> Secretaria -> Pessoa com Deficiência', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuPessoaComDeficiencia();
  //await page.getByRole('heading', { name: 'Secretaria da Pessoa com Deficiência' }).isVisible();
});

test('Secretarias -> Secretaria -> Políticas Públicas Para Mulheres', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuPoliticasPublicasParaMulheres();
  //await page.getByRole('heading', { name: 'Secretaria de Políticas Públicas para Mulheres' }).isVisible();
});

test('Secretarias -> Secretaria -> Procon', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuProcon();
  //await page.getByRole('heading', { name: 'ProCoordenadoria de Proteção e Defesa do Consumidor - Proconcon' }).isVisible();
});

test('Secretarias -> Secretaria -> Procuradoria Geral do Município', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuProcuradoriaGeralMunicipio();
  //await page.getByRole('heading', { name: 'Procuradoria-Geral do Município' }).isVisible();
});

test('Secretarias -> Secretaria -> Proteção E Bem Estar Animal', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuProtecaoBemEstarAnimal();
  //await page.getByRole('heading', { name: 'Secretaria de Proteção e Bem Estar Animal' }).isVisible();
});

test('Secretarias -> Secretaria -> Saúde', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuSaude();
  //await page.getByRole('heading', { name: 'Secretaria Municipal de Saúde' }).isVisible();
});

test('Secretarias -> Secretaria -> Segurança', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuSeguranca();
  //await page.getByRole('heading', { name: 'Secretaria de Segurança' }).isVisible();
});

test('Secretarias -> Secretaria -> Tecnologia e Inovação', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuTecnologiaInovacao();
  //await page.getByRole('heading', { name: 'Agência Maringá de Tecnologia e Inovação' }).isVisible();
});

test('Secretarias -> Secretaria -> Trabalho, Renda e Agricultura Familiar', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuTrabalhoRendaAgriculturaFamiliar();
  //await page.getByRole('heading', { name: 'Secretaria de Trabalho, Renda e Agricultura Familiar' }).isVisible();
});

test('Secretarias -> Secretaria -> Urbanismo e Habitação', async ({ page }) => {

  menuSecretariasPage.clickSubSecretarias();
  menuSecretariasPage.clickSubmenuUrbanismoHabitação();
  //await page.getByRole('heading', { name: 'Secretaria de Urbanismo e Habitação' }).isVisible();
});