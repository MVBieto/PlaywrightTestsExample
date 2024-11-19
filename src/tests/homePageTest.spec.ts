import { test, expect } from '@playwright/test';
import { common } from '../pages/CommonPage';

test.describe('Sanity Test - HomePage initials', () => {
  // test('Navigate to home page and validate title', async ({ page }) => {
  //   const commonPage = new common(page);
  //   await commonPage.navigateToHome();
  //   expect(await page.title()).toBe('Securely Store, Manage & Autofill Passwords | NordPass');
  // });

  test('Navigate to home page and validate business plans', async ({ page }) => {
    const commonPage = new common(page);
    await commonPage.navigateToHome();
    await commonPage.acceptTermsNConditions()

    //go to plans/business
    await commonPage.clickButton(commonPage.businessPlansButton)

    //validate 3 main business plan panels exist
    await expect((await commonPage.businessPlansSquare).length).toEqual(3)
    await expect(commonPage.teamslocator).toBeDefined();
    
    
    
    await page.waitForTimeout(5000);
  })
})

