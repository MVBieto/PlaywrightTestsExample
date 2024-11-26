import { Page } from '@playwright/test';
import { Home } from '../pages/HomePage'
import { Common } from '../pages/CommonPage'
import { Trial } from '../pages/TrialPage'
import { BusinessPlan } from '../pages/BusinessPlansPage';

export class Pages {
    homePage : Home;
    commonPage : Common;
    businessPlanPage : BusinessPlan;
    trialPage: Trial;

  constructor(page: Page) {
    this.homePage = new Home(page);
    this.commonPage = new Common(page);
    this.businessPlanPage = new BusinessPlan(page)
    this.trialPage = new Trial(page)
  }
}
