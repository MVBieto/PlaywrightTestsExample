import { Page } from "playwright-core";
import { Common } from "./CommonPage";


export class BusinessPlan extends Common {
    constructor(page: Page) {
        super(page)
    }

    get tabsContentArea() { return this.page.locator('h1').getByText(`Get the plan that’s right for you`) }
    get planPersonalSlider() { return this.page.locator('.flex.justify-center').getByText('Personal & Family') }
    get planCards() { return this.page.locator('.Tabs__content').locator('div.mx-3.w-full') }

    //BusinessCards
    get teamsCard() { return this.planCards.filter({ hasText: 'Teams' }) }
    get businessCard() { return this.planCards.filter({ hasText: 'Business' }) }
    get enterPriseCard() { return this.planCards.filter({ hasText: 'Enterprise' }) }

    //FamilyCards
    get freeCard() { return this.planCards.filter({ hasText: 'Free' }).first() }
    get premiumCard() { return this.planCards.filter({ hasText: 'Premium' }).first() }
    get familyCard() { return this.planCards.filter({ hasText: 'Family' }) }

}