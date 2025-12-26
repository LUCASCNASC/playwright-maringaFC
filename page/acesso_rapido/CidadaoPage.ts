import { test, expect, Page } from '@playwright/test';

export class CidadaoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar na opção Cidadão
  async clickCidadao() {
    await this.page.getByRole('tab', { name: 'Cidadão' }).click();
  }

  //clicar na opção Farmácia Móvel
  async clickFarmaciaMovel() {
    await this.page.getByRole('link', { name: 'Farmácia Móvel' }).click();
    await expect(this.page).toHaveURL(
    'https://storage.maringa.pr.gov.br/1/61e19a2a-c2e7-4235-82e3-5a04a98389a0.pdf'
    );
}

  //clicar na opção Resid. Médica Edital 2026
  async clickResidMedicaEdital() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção PSS Educação 2025
  async clickPSSEducacao() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção PSS Saúde 2025
  async clickPSSSaude() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Agenda Previsão de Pagamento
  async clickAgendaPrevisaoPagamento() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Vacinação
  async clickVacinacao() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção leis do Município
  async clickLeisMunicipio() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Estágio
  async clickEstagio() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Carta de Serviços
  async clickCartaServiços() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção SEI
  async clickSEI() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Passe do Estudante
  async clickPasseEstudante() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Consulta Concursos
  async clickConsultaConcursos() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Diário Oficial
  async clickDiArioOficial() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção EMISSÃO DE GUIAS/BOLETOS
  async clickEmissaoGuiasBoletos() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Emissão de Certidões
  async clickEmissaoCertidoes() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Plano Diretor 2020-2030
  async clickPlanoDiretor() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção FAQ - LGPD
  async clickFaqLGPD() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Portal Maringá compra
  async clickPortalMaringaCompra() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Notifica Saúde
  async clickNotificaSaude() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Portal Saúde Maringá
  async clickPortalSaudeMaringa() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Sala digital do microempreendedor
  async clickSalaDigitalMicroempreendedor() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Agencia do Trabalhador
  async clickAgenciaTrabalhador() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Vacinação Covid-19
  async clickVacinacaoCovid19() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Acesso a Informação
  async clickAcessoInformacao() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }

  //clicar na opção Portal Covid-19
  async clickPortalCovid19() {
    await this.page.getByRole('link', { name: 'Início' }).click();
  }
}