import { expect, type Locator, type Page } from '@playwright/test';

export class Navigation {
  readonly page: Page;
  readonly navigationItem: Locator;
  readonly activeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationItem = page.locator('//a[contains(@class, "navigation-tab") and .="Видео"]');
    this.activeLink = page.locator('//a[contains(@class, "navigation-tab")]/li[contains(@class, "navigation-tab__isActive")]');
  }

  async clickOnNavigationLink() {
    await this.navigationItem.click();
    await this.page.waitForLoadState();
  }

  async checkActiveLink() {
    await expect(this.activeLink).toBeVisible();
  }
}