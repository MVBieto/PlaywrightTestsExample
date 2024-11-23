import { Page } from '@playwright/test';
import { home } from '../pages/HomePage'
import { common } from '../pages/CommonPage'
import { trial } from '../pages/TrialPage'
import { businessplan } from '../pages/BusinessPlansPage';

export class Pages {
    homePage : home;
    commonPage : common;
    businessPlanPage : businessplan;
    trialPage: trial;

  constructor(page: Page) {
    this.homePage = new home(page);
    this.commonPage = new common(page);
    this.businessPlanPage = new businessplan(page)
    this.trialPage = new trial(page)
  }
}
