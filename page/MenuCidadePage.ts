import { test, expect, Page } from '@playwright/test';

export class MenuCidadePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //clicar no menu A Cidade
  async clickACidade() {
    await this.page.locator('a').filter({ hasText: /^A Cidade$/ }).click();
  }

  //clicar no submenu Bandeira
  async clickBandeira() {
    await this.page.getByRole('link', { name: 'Bandeira' }).click();
  }

   //clicar no submenu Brasão
  async clickBrasao() {
    await this.page.getByRole('link', { name: 'Brasão' }).click();
  }

  //clicar no submenu Cadastur
  async clickCadastur() {
    await this.page.getByRole('link', { name: 'Cadastur' }).click();
  }

  //clicar no submenu Demografia
  async clickDemografia() {
    await this.page.getByRole('link', { name: 'Demografia' }).click();
  }

  //clicar no submenu Embarque/Desembarque Rodoviária
  async clickEmbarqueDesembarqueRodoviaria() {
    await this.page.getByRole('link', { name: 'Embarque/Desembarque Rodoviária' }).click();
  }

  //clicar no submenu Galeria de Arte
  async clickGaleriaDeArte() {
    await this.page.getByRole('link', { name: 'Galeria de Arte' }).click();
  }

  //clicar no submenu Hino
  async clickHino() {
    await this.page.getByRole('link', { name: 'Hino' }).click();
  }

  //clicar no submenu Histórico do Município
  async clickHistoricoDoMunicipio() {
    await this.page.getByRole('link', { name: 'Histórico do Município' }).click();
  }

  //clicar no submenu Cidade Canção
  async clickCidadeCancao() {
    await this.page.getByRole('link', { name: 'Maringá - Cidade Canção 🎵' }).click();
  }

  //clicar no submenu Maringá em Rotas
  async clickMaringaEmRotas() {
    await this.page.getByRole('link', { name: 'Maringá em Rotas' }).click();
  }

  //clicar no submenu Nossa Cidade
  async clickNossaCidade() {
    await this.page.getByRole('link', { name: 'Nossa Cidade' }).click();
  }

  //clicar no submenu Plano Municipal de Turismo
  async clickPlanoMunicipalDeTurismo() {
    await this.page.getByRole('link', { name: 'Plano Municipal de Turismo 2023/2033' }).click();
  }
}