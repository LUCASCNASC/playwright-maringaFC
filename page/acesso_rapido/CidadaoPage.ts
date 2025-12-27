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
    'https://www.maringa.pr.gov.br'
    );
}

  //clicar na opção Resid. Médica Edital 2026
  async clickResidMedicaEdital() {
    await this.page.getByRole('link', { name: 'Resid. Médica Edital 2026' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção PSS Educação 2025
  async clickPSSEducacao() {
    await this.page.getByRole('link', { name: 'PSS Educação 2025' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção PSS Saúde 2025
  async clickPSSSaude() {
    await this.page.getByRole('link', { name: 'PSS Saúde 2025' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Sistema Elotech Oxy
  async clickSistemaElotechOxy() {
    await this.page.getByRole('link', { name: 'Sistema Elotech Oxy' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Agenda Previsão de Pagamento
  async clickAgendaPrevisaoPagamento() {
    await this.page.getByRole('link', { name: 'Agenda Previsão de Pagamento' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Vacinação
  async clickVacinacao() {
    await this.page.getByRole('link', { name: 'Vacinação' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção leis do Município
  async clickLeisMunicipio() {
    await this.page.getByRole('link', { name: 'leis do Município' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Estágio
  async clickEstagio() {
    await this.page.getByRole('link', { name: 'Estágio' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção S.I.M
  async clickSIM() {
    await this.page.getByRole('link', { name: 'S.I.M' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Carta de Serviços
  async clickCartaServiços() {
    await this.page.getByRole('link', { name: 'Carta de Serviços' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção SEI
  async clickSEI() {
    await this.page.getByRole('link', { name: 'SEI' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Passe do Estudante
  async clickPasseEstudante() {
    await this.page.getByRole('link', { name: 'Passe do Estudante' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção ISS Eletrônico
  async clickISSEletronico() {
    await this.page.getByRole('link', { name: 'ISS Eletrônico' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Consulta Concursos
  async clickConsultaConcursos() {
    await this.page.getByRole('link', { name: 'Consulta Concursos' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Diário Oficial
  async clickDiArioOficial() {
    await this.page.getByRole('link', { name: 'Diário Oficial' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção EMISSÃO DE GUIAS/BOLETOS
  async clickEmissaoGuiasBoletos() {
    await this.page.getByRole('link', { name: 'EMISSÃO DE GUIAS/BOLETOS' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Emissão de Certidões
  async clickEmissaoCertidoes() {
    await this.page.getByRole('link', { name: 'Emissão de Certidões' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Plano Diretor 2020-2030
  async clickPlanoDiretor() {
    await this.page.getByRole('link', { name: 'Plano Diretor 2020-2030' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção FAQ - LGPD
  async clickFaqLGPD() {
    await this.page.getByRole('link', { name: 'FAQ - LGPD' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Portal Maringá compra
  async clickPortalMaringaCompra() {
    await this.page.getByRole('link', { name: 'Portal Maringá compra' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Notifica Saúde
  async clickNotificaSaude() {
    await this.page.getByRole('link', { name: 'Notifica Saúde' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Portal Saúde Maringá
  async clickPortalSaudeMaringa() {
    await this.page.getByRole('link', { name: 'Portal Saúde Maringá' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Sala digital do microempreendedor
  async clickSalaDigitalMicroempreendedor() {
    await this.page.getByRole('link', { name: 'Sala digital do microempreendedor' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Agência do Trabalhador
  async clickAgenciaTrabalhador() {
    await this.page.getByRole('link', { name: 'Agência do Trabalhador' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Vacinação Covid-19
  async clickVacinacaoCovid19() {
    await this.page.getByRole('link', { name: 'Vacinação Covid-19' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Acesso à Informação
  async clickAcessoInformacao() {
    await this.page.getByRole('link', { name: 'Acesso à Informação' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }

  //clicar na opção Portal Covid-19
  async clickPortalCovid19() {
    await this.page.getByRole('link', { name: 'Portal Covid-19' }).click();
    await expect(this.page).toHaveURL(
    'https://www.maringa.pr.gov.br'
    );
  }
}