import { Page } from "playwright-core";
import { common } from "./CommonPage";


export class home extends common {

  constructor(page: Page) {
    super(page)
  }

  get acceptPrivacyButton() { return this.page.locator('#widget-button-accept') }
  get businessPlansButton() { return this.page.locator('a[data-ga-slug=Business]').first() }
  get businessNavigationBar() { return this.page.getByTestId('header-nav-business').getByRole('link', { name: 'Business' }) }
  get startFreeTrialButton() { return this.page.locator('[data-ga-slug="Start Free Trial"]') }

  async navigateToHome() {
    await this.page.goto('https://nordpass.com/');
  }

  async acceptTermsNConditions() {
    await this.acceptPrivacyButton.click()
  }
}