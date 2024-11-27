import { expect, test } from '@playwright/test'
import { Pages } from '../utils/PagesManager'

test.describe('Validate Start Trial page', () => {
  test('From HomePage, go to Start trial page and fill the necessary information', async ({ page }) => {
    const pages = new Pages(page)
    await pages.homePage.navigateToHome()
    await pages.homePage.acceptTermsNConditions()

    //Go to Start Trial Page
    await pages.homePage.businessNavigationBar.click()
    await pages.homePage.startFreeTrialButton.click()

    //Fill the data of the Start Trial form
    await expect(pages.trialPage.europeanUnionServerStoringRadioButton).toBeVisible()
    await pages.trialPage.inputDataField(pages.trialPage.fullNameField, 'testName')
    await pages.trialPage.inputDataField(pages.trialPage.businessEmailField, 'testBusinessEmail@yopmail.com')
    await pages.trialPage.inputDataField(pages.trialPage.companyNameField, 'BarcelonaQACheckingYourPage')
    await pages.trialPage.inputDataField(pages.trialPage.companyAddressField, 'Barcelona City')
    await pages.trialPage.choosePlanDropdownMenu.selectOption('Teams')
    await pages.trialPage.countryDropdownMenu.selectOption('Spain')
    await pages.trialPage.companySizeDropdownMenu.selectOption('1-10 users')
    await pages.trialPage.europeanUnionServerStoringRadioButton.click()

    // await commonPage.clickButton(pages.trialPage.submitButton) Not implemented to avoid triggering unnecessary messages in production
    // await expect(ThankYouPage).toBeVisible()
    // await expect(mailtrap.getLastFiveEmails.filter(subject, from, to)).toContainText('Data')

    // await page.waitForTimeout(3000)
  })
})