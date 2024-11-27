import { test, expect } from '@playwright/test'
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
    await pages.homePage.businessPlansButton.click()

    // validate 3 main business plan cards exist
    await expect(pages.businessPlanPage.planCards).toHaveCount(3)
    await expect(pages.businessPlanPage.teamsCard).toBeVisible()
    await expect(pages.businessPlanPage.businessCard).toBeVisible()
    await expect(pages.businessPlanPage.enterPriseCard).toBeVisible()

    //Move to personal plans
    await pages.businessPlanPage.planPersonalSlider.click()
    await expect(pages.businessPlanPage.freeCard).toBeVisible()

    // validate 3 main personal plan cards exist
    await expect(pages.businessPlanPage.planCards).toHaveCount(3)
    await expect(pages.businessPlanPage.freeCard).toBeVisible()
    await expect(pages.businessPlanPage.premiumCard).toBeVisible()
    await expect(pages.businessPlanPage.familyCard).toBeVisible()


  })
})

