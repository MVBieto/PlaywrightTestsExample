import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class common {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //HomePage
  get acceptPrivacyButton() { return this.page.locator('#widget-button-accept')}
  get businessPlansButton() { return this.page.locator('a[data-ga-slug=Business]').first()}

  //BusinessPage
  get businessPlansSquare() { return this.page.locator('.mx-3.w-full').all()}
  get teamslocator () { return (this.businessPlansSquare, { hasText: 'Teams'})}
  

  async navigateToHome() {
    await this.page.goto('https://nordpass.com/');
  }

  async acceptTermsNConditions() {
    await this.clickButton(this.acceptPrivacyButton);
  }

  async clickButton(buttonLocator: Locator) {
    await buttonLocator.click();
  }
}
