import { test, expect, Page } from '@playwright/test';

export class MenuSecretariasPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar no menu Secretarias
  async clickSecretarias() {
    await this.page.locator('a').filter({ hasText: 'Secretarias' }).first().click();
  }

  //clicar no menu Prefeitos
  async clickPrefeitos() {
    await this.page.getByRole('link', { name: 'Prefeitos' }).click();
  }

  //clicar no menu Estrutura Organizacional / Organograma
  async clickEstruturaOrganizacionalOrganograma() {
    await this.page.getByRole('link', { name: 'Estrutura Organizacional / Organograma' }).click();
  }

  //clicar no submenu Secretarias
  async clickSubSecretarias() {
    await this.page.locator('#pv_id_1_2_2 a').filter({ hasText: 'Secretarias' }).click();
  }

  //clicar no submenu Gabinete do Prefeito
  async clickSubmenuGabinetePrefeito() {
    await this.page.getByRole('link', { name: 'Gabinete do Prefeito' }).click();
  }

  //clicar no submenu Aceleração Econômica E Turismo
  async clickSubmenuAceleracaoEconomicaTurismo() {
    await this.page.getByRole('link', { name: 'Aceleração Econômica E Turismo' }).click();
  }

  //clicar no submenu Aeroporto
  async clickSubmenuAeroporto() {
    await this.page.getByRole('link', { name: 'Aeroporto' }).click();
  }

  //clicar no submenu Agência Maringaense de Regulação - AMR
  async clickSubmenuAgenciaMaringaenseDeRegulacaoAMR() {
    await this.page.getByRole('link', { name: 'Agência Maringaense de Regulação - AMR' }).click();
  }

  //clicar no submenu Assistência Social
  async clickSubmenuAssistenciaSocial() {
    await this.page.getByRole('link', { name: 'Assistência Social' }).click();
  }

  //clicar no submenu Assuntos Metropolitanos e Comunitários
  async clickSubmenuAssuntosMetropolitanosComunitarios() {
    await this.page.getByRole('link', { name: 'Assuntos Metropolitanos e Comunitários' }).click();
  }

  //clicar no submenu Chefia de Gabinete
  async clickSubmenuChefiaGabinete() {
    await this.page.getByRole('link', { name: 'Chefia de Gabinete' }).click();
  }

  //clicar no submenu Compliance E Controle
  async clickSubmenuComplianceControle() {
    await this.page.getByRole('link', { name: 'Compliance E Controle' }).click();
  }

  //clicar no submenu Comunicação
  async clickSubmenuComunicacao() {
    await this.page.getByRole('link', { name: 'Comunicação' }).click();
  }

  //clicar no submenu Criança e do Adolescente
  async clickSubmenuCriancaAdolescente() {
    await this.page.getByRole('link', { name: 'Criança e do Adolescente' }).click();
  }

  //clicar no submenu Cultura
  async clickSubmenuCultura() {
    await this.page.getByRole('link', { name: 'Cultura' }).click();
  }

  //clicar no submenu Educação
  async clickSubmenuEducacao() {
    await this.page.getByRole('link', { name: 'Educação' }).click();
  }

  //clicar no submenu Esportes e Lazer
  async clickSubmenuEsportesLazer() {
    await this.page.getByRole('link', { name: 'Esportes e Lazer' }).click();
  }

  //clicar no submenu Fazenda
  async clickSubmenuFazenda() {
    await this.page.getByRole('link', { name: 'Fazenda' }).click();
  }

  //clicar no submenu Gestão De Pessoas
  async clickSubmenuGestaoPessoas() {
    await this.page.getByRole('link', { name: 'Gestão De Pessoas' }).click();
  }

  //clicar no submenu Governo
  async clickSubmenuGoverno() {
    await this.page.getByRole('link', { name: 'Governo' }).click();
  }

  //clicar no submenu Infraestrutura
  async clickSubmenuInfraestrutura() {
    await this.page.getByRole('link', { name: 'Infraestrutura' }).click();
  }

  //clicar no submenu Instituto Ambiental de Maringá
  async clickSubmenuInstitutoAmbientalMaringa() {
    await this.page.getByRole('link', { name: 'Instituto Ambiental de Maringá' }).click();
  }

  //clicar no submenu Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM
  async clickSubmenuInstitutoDePesquisaPlanejamentoUrbanoMaringaIPPLAM() {
    await this.page.getByRole('link', { name: 'Instituto de Pesquisa E Planejamento Urbano De Maringá - IPPLAM' }).click();
  }

  //clicar no submenu Juventude Cidadania E Migrantes
  async clickSubmenuJuventudeCidadaniaMigrantes() {
    await this.page.getByRole('link', { name: 'Juventude Cidadania E Migrantes' }).click();
  }

  //clicar no submenu Limpeza Urbana
  async clickSubmenuLimpezaUrbana() {
    await this.page.getByRole('link', { name: 'Limpeza Urbana' }).click();
  }

  //clicar no submenu Logística E Compras
  async clickSubmenuLogisticaCompras() {
    await this.page.getByRole('link', { name: 'Logística E Compras' }).click();
  }

  //clicar no submenu Maringá Previdência
  async clickSubmenuMaringaPrevidencia() {
    await this.page.getByRole('link', { name: 'Maringá Previdência' }).click();
  }

  //clicar no submenu Mobilidade Urbana
  async clickSubmenuMobilidadeUrbana() {
    await this.page.getByRole('link', { name: 'Mobilidade Urbana' }).click();
  }

  //clicar no submenu Obras Públicas
  async clickSubmenuObrasPublicas() {
    await this.page.getByRole('link', { name: 'Obras Públicas' }).click();
  }

  //clicar no submenu Pessoa com Deficiência
  async clickSubmenuPessoaComDeficiencia() {
    await this.page.getByRole('link', { name: 'Pessoa com Deficiência' }).click();
  }

  //clicar no submenu Políticas Públicas Para Mulheres
  async clickSubmenuPoliticasPublicasParaMulheres() {
    await this.page.getByRole('link', { name: 'Políticas Públicas Para Mulheres' }).click();
  }

  //clicar no submenu Procon
  async clickSubmenuProcon() {
    await this.page.getByRole('link', { name: 'Procon' }).click();
  }

  //clicar no submenu Procuradoria Geral do Município
  async clickSubmenuProcuradoriaGeralMunicipio() {
    await this.page.getByRole('link', { name: 'Procuradoria Geral do Município' }).click();
  }

  //clicar no submenu Proteção E Bem Estar Animal
  async clickSubmenuProtecaoBemEstarAnimal() {
    await this.page.getByRole('link', { name: 'Proteção E Bem Estar Animal' }).click();
  }

  //clicar no submenu Saúde
  async clickSubmenuSaude() {
    await this.page.getByRole('link', { name: 'Saúde' }).click();
  }

  //clicar no submenu Segurança
  async clickSubmenuSeguranca() {
    await this.page.getByRole('link', { name: 'Segurança' }).click();
  }

  //clicar no submenu Tecnologia e Inovação
  async clickSubmenuTecnologiaInovacao() {
    await this.page.getByRole('link', { name: 'Tecnologia e Inovação' }).click();
  }

  //clicar no submenu Trabalho, Renda e Agricultura Familiar
  async clickSubmenuTrabalhoRendaAgriculturaFamiliar() {
    await this.page.getByRole('link', { name: 'Trabalho, Renda e Agricultura Familiar' }).click();
  }

  //clicar no submenu Urbanismo e Habitação
  async clickSubmenuUrbanismoHabitação() {
    await this.page.getByRole('link', { name: 'Urbanismo e Habitação' }).click();
  }
}