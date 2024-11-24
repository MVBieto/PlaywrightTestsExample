import { test, expect, Locator } from '@playwright/test'
import 'playwright'
import 'playwright-core'
import { Pages } from '../utils/PagesManager';

test.describe('Initial Tests, Sanity and Business Plans', () => {
  test('Sanity test - Open home page and validate title', async ({ page }) => {
    const pages = new Pages(page)
    await pages.homePage.navigateToHome()
    expect(await page.title()).toBe('Securely Store, Manage & Autofill Passwords | NordPass')
  })
  test('From HomePage, navigate to Business plans page and validate business plans', async ({ page }) => {
    const pages = new Pages(page)
    await pages.homePage.navigateToHome()
    await pages.homePage.acceptTermsNConditions()

    //go to plans/business
    await pages.commonPage.clickButton(pages.homePage.businessPlansButton)

    // validate 3 main business plan cards exist
    expect(pages.businessPlanPage.planCards).toHaveCount(3)
    expect(pages.businessPlanPage.teamsCard).toBeVisible()
    expect(pages.businessPlanPage.businessCard).toBeVisible()
    expect(pages.businessPlanPage.enterPriseCard).toBeVisible()

    //Move to personal plans
    await pages.commonPage.clickButton(pages.businessPlanPage.planPersonalSlider)
    await pages.commonPage.waitForLocator(pages.businessPlanPage.freeCard)

    // validate 3 main personal plan cards exist
    expect(pages.businessPlanPage.planCards).toHaveCount(3)
    expect(pages.businessPlanPage.freeCard).toBeVisible()
    expect(pages.businessPlanPage.premiumCard).toBeVisible()
    expect(pages.businessPlanPage.familyCard).toBeVisible()


    await page.waitForTimeout(2000)
  })
})

