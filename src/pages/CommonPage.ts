import { Locator } from '@playwright/test';
import { Page } from 'playwright';

export class Common {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async inputDataField(locator: Locator, data: string) {
    await locator.click()
    await locator.fill(data)
  }
}
