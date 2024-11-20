import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class common {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //HomePage
  get acceptPrivacyButton () { return this.page.locator('#widget-button-accept')}
  get businessPlansButton () { return this.page.locator('a[data-ga-slug=Business]').first()}

  //BusinessPage
  get tabsContentArea () { return this.page.locator('h1').getByText(`Get the plan that’s right for you`)}
  get planCards () { return this.page.locator('.Tabs__content').locator('div.mx-3.w-full')}
  get teamsCard () { return this.planCards.filter({ hasText: 'Teams' })}
  get businessCard () { return this.planCards.filter({ hasText: 'Business' })}
  get enterPriseCard () { return this.planCards.filter({ hasText: 'Enterprise' })}

  get freeCard () { return this.planCards.filter({ hasText: 'Free' })}
  get premiumCard () { return this.planCards.filter({ hasText: 'Premium' }).first()}
  get familyCard () { return this.planCards.filter({ hasText: 'Family' })}

  get priceLocators () { return this.page.locator("span.nord-text.text-base.leading-normal.text-h2.font-medium")}
  get planPersonalSlider() { return this.page.locator('.flex.justify-center').getByText('Personal & Family')}
  

  async navigateToHome() {
    await this.page.goto('https://nordpass.com/');
  }

  async acceptTermsNConditions() {
    await this.acceptPrivacyButton.click()
  }

  async clickButton(buttonLocator: Locator) {
    this.waitForLocator(buttonLocator)
    await buttonLocator.click()
  }

  async waitForLocator(buttonLocator: Locator) {
    await buttonLocator.nth(0).waitFor({ timeout: 2000})
  }
}
