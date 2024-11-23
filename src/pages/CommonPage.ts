import { expect, Locator } from '@playwright/test';
import { Page } from 'playwright';

export class common {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickButton(element: Locator) {
    this.waitForLocator(element)
    await element.click()
  }

  async waitForLocator(element: Locator) {
    await element.waitFor({ timeout: 2000 })
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
}
