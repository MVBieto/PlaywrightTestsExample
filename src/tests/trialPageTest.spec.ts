import { test } from '@playwright/test'
import 'playwright'
import 'playwright-core'
import { Pages } from '../utils/PagesManager'

test.describe('Validate Start Trial page', () => {
  test('From HomePage, go to Start trial page and fill the necessary information', async ({ page }) => {
    const pages = new Pages(page)
    await pages.homePage.navigateToHome()
    await pages.homePage.acceptTermsNConditions()

    //Go to Start Trial Page
    await pages.commonPage.clickButton(pages.homePage.businessNavigationBar)
    await pages.commonPage.clickButton(pages.homePage.startFreeTrialButton)

    //Fill the data of the Start Trial form
    await pages.commonPage.waitForLocator(pages.trialPage.startTrialFormPageTitle)
    await pages.commonPage.inputDataField(pages.trialPage.fullNameField, 'testName')
    await pages.commonPage.inputDataField(pages.trialPage.businessEmailField, 'testBusinessEmail@yopmail.com')
    await pages.commonPage.inputDataField(pages.trialPage.companyNameField, 'BarcelonaQACheckingYourPage')
    await pages.commonPage.inputDataField(pages.trialPage.companyAddressField, 'Barcelona City')
    await pages.commonPage.selectDropdownWithValues(pages.trialPage.choosePlanDropdownMenu, 'Teams')
    await pages.commonPage.selectDropdownWithValues(pages.trialPage.countryDropdownMenu, 'Spain')
    await pages.commonPage.selectDropdownWithValues(pages.trialPage.companySizeDropdownMenu, '1-10 users')
    await pages.commonPage.clickButton(pages.trialPage.europeanUnionServerStoringRadioButton)

    // await commonPage.clickButton(pages.trialPage.submitButton) Not implemented, don't worry :)

    await page.waitForTimeout(2000)
  })

  // TO-DO
  // test('Negative-TC', async ({ page }) => {
  //   const commonPage = new common(page)
  // })
})