import { expect, type Locator, type Page } from '@playwright/test';

export class VideoPage {
  readonly page: Page;
  readonly pageVideoLogo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly activeSearchTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageVideoLogo = page.locator('//header[contains(@class, "desktop-base-header__isVideo")]//a[@href="/video"]');
    this.searchInput = page.locator('//input[@data-testid="search-input"]');
    this.searchButton = page.locator('//button[.="Найти"]');
    this.activeSearchTab = page.locator('//button[@aria-label="Активный поисковый фильтр"]/span[.="Видео и ролики"]');
  }

  async checkVideoLogo() {
    await expect(this.pageVideoLogo).toBeVisible();
  }

  async enterSearchText(searchText: string) {
    await expect(this.searchInput).toBeVisible();
    await this.searchInput.click();
    await this.searchInput.fill(searchText);
  }

  async clickSearchButton() {
    // await expect(this.searchButton).toBeVisible();
    // this.searchButton.click();
    await this.searchInput.press('Enter');
  }

  async checkActiveSearchTab() {
    await expect(this.activeSearchTab).toBeVisible();
  }
}