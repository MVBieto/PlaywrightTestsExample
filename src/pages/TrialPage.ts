import { Page } from "playwright-core";
import { Common } from "./CommonPage";


export class Trial extends Common {

  constructor(page: Page) {
    super(page)
  }

  //StartTrialForm
  get startTrialFormPageTitle() { return this.page.locator('h2') }
  get choosePlanDropdownMenu() { return this.page.locator('[data-testid="business-free-trial-select-plan"]') }
  get fullNameField() { return this.page.locator('[data-testid="business-free-trial-full-name"]') }
  get businessEmailField() { return this.page.locator('[data-testid="business-free-trial-email"]') }
  get companyNameField() { return this.page.locator('[data-testid="business-free-trial-company-name"]') }
  get companyAddressField() { return this.page.locator('[data-testid="business-free-trial-company-address"]') }
  get countryDropdownMenu() { return this.page.locator('[data-testid="business-free-trial-select-country"]') }
  get companySizeDropdownMenu() { return this.page.locator('[data-testid="business-free-trial-company-size"]') }
  get europeanUnionServerStoringRadioButton() { return this.page.locator('#udc-eu') }

}