import { test, expect, Locator } from '@playwright/test'
import { common } from '../pages/CommonPage';
import 'playwright'
import 'playwright-core'

test.describe('Sanity Test - HomePage initials', () => {
  // test('Navigate to home page and validate title', async ({ page }) => {
  //   const commonPage = new common(page);
  //   await commonPage.navigateToHome();
  //   expect(await page.title()).toBe('Securely Store, Manage & Autofill Passwords | NordPass');
  // });

  test('Navigate to home page and validate business plans', async ({ page }) => {
    const commonPage = new common(page)
    await commonPage.navigateToHome()
    await commonPage.acceptTermsNConditions()

    //go to plans/business
    await commonPage.clickButton(commonPage.businessPlansButton)

    // validate 3 main business plan panels exist
    expect(commonPage.planCards).toHaveCount(3)
    expect(commonPage.teamsCard).toBeVisible()
    expect(commonPage.businessCard).toBeVisible()
    expect(commonPage.enterPriseCard).toBeVisible()

    //Move to Personal Plans
    await commonPage.clickButton(commonPage.planPersonalSlider)
    await commonPage.waitForLocator(commonPage.freeCard)

    // validate 3 main personal plan panels exist
    expect(commonPage.planCards).toHaveCount(3)
    expect(commonPage.freeCard).toBeVisible()
    expect(commonPage.premiumCard).toBeVisible()
    expect(commonPage.familyCard).toBeVisible()


    await page.waitForTimeout(2000)
  })
})

