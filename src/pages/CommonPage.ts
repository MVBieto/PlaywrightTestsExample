import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class common {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //#region locators

  //HomePage
  get acceptPrivacyButton () { return this.page.locator('#widget-button-accept')}
  get businessPlansButton () { return this.page.locator('a[data-ga-slug=Business]').first()}
  get businessNavigationBar () { return this.page.getByTestId('header-nav-business').getByRole('link', { name: 'Business' })}
  get startFreeTrialButton() { return this.page.locator('[data-ga-slug="Start Free Trial"]')}
  //BusinessPage
  get tabsContentArea () { return this.page.locator('h1').getByText(`Get the plan that’s right for you`)}
  get planPersonalSlider() { return this.page.locator('.flex.justify-center').getByText('Personal & Family')}

  get planCards () { return this.page.locator('.Tabs__content').locator('div.mx-3.w-full')}

  //BusinessCards
  get teamsCard () { return this.planCards.filter({ hasText: 'Teams' })}
  get businessCard () { return this.planCards.filter({ hasText: 'Business' })}
  get enterPriseCard () { return this.planCards.filter({ hasText: 'Enterprise' })}
  
  //FamilyPage
  get freeCard () { return this.planCards.filter({ hasText: 'Free' }).first()}
  get premiumCard () { return this.planCards.filter({ hasText: 'Premium' }).first()}
  get familyCard () { return this.planCards.filter({ hasText: 'Family' })}

  //StartTrialForm
  get startTrialFormPageTitle () { return this.page.locator('h2')}
  get choosePlanDropdownMenu () { return this.page.locator('[data-testid="business-free-trial-select-plan"]')}
  get fullNameField () { return this.page.locator('[data-testid="business-free-trial-full-name"]')}
  get businessEmailField () { return this.page.locator('[data-testid="business-free-trial-email"]')}
  get companyNameField () { return this.page.locator('[data-testid="business-free-trial-company-name"]')}
  get companyAddressField () { return this.page.locator('[data-testid="business-free-trial-company-address"]')}
  get countryDropdownMenu () { return this.page.locator('[data-testid="business-free-trial-select-country"]')}
  get companySizeDropdownMenu () { return this.page.locator('[data-testid="business-free-trial-company-size"]')}
  get europeanUnionServerStoringRadioButton () { return this.page.locator('#udc-eu')}


  //#endregion
  
//#region functions
  async navigateToHome() {
    await this.page.goto('https://nordpass.com/');
  }

  async acceptTermsNConditions() {
    await this.acceptPrivacyButton.click()
  }

  async clickButton(element: Locator) {
    this.waitForLocator(element)
    await element.click()
  }

  async waitForLocator(element: Locator) {
    await element.waitFor({ timeout: 2000})
  }

  async selectDropdownWithValues(locator: Locator, value: string) {
    this.waitForLocator(locator)
    await locator.selectOption(value)
  }

  async inputDataField(locator: Locator, data: string) {
    this.waitForLocator(locator)
    await locator.click()
    await locator.type(data)

  }
  //#endregion
}
