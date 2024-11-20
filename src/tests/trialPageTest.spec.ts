import { test, expect, Locator } from '@playwright/test'
import { common } from '../pages/CommonPage';
import 'playwright'
import 'playwright-core'

test.describe('Validate Start Trial page', () => {
  test('From HomePage, go to Start trial page and fill the necessary information', async ({ page }) => {
    const commonPage = new common(page)
    await commonPage.navigateToHome()
    await commonPage.acceptTermsNConditions()

    //Go to Start Trial Page
    await commonPage.clickButton(commonPage.businessNavigationBar)
    await commonPage.clickButton(commonPage.startFreeTrialButton)

    //Fill the data of the Start Trial form
    await commonPage.waitForLocator(commonPage.startTrialFormPageTitle)
    await commonPage.inputDataField(commonPage.fullNameField, 'testName')
    await commonPage.inputDataField(commonPage.businessEmailField, 'testBusinessEmail@yopmail.com')
    await commonPage.inputDataField(commonPage.companyNameField, 'BarcelonaQACheckingYourPage')
    await commonPage.inputDataField(commonPage.companyAddressField, 'Barcelona City')
    await commonPage.selectDropdownWithValues(commonPage.choosePlanDropdownMenu, 'Teams')
    await commonPage.selectDropdownWithValues(commonPage.countryDropdownMenu, 'Spain')
    await commonPage.selectDropdownWithValues(commonPage.companySizeDropdownMenu, '1-10 users')
    await commonPage.clickButton(commonPage.europeanUnionServerStoringRadioButton)

    // await commonPage.clickButton(commonPage.submitButton)

    await page.waitForTimeout(5000)
  })

  // TO-DO
  // test('Negative-TC', async ({ page }) => {
  //   const commonPage = new common(page)
  // })
})