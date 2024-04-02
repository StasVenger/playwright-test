import { expect, type Locator, type Page } from '@playwright/test';

export class VideoPage {
  readonly page: Page;
  readonly pageVideoLogo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly activeSearchTab: Locator;
  readonly videoCardLink: Locator;
  readonly videoControlsPanel: Locator;
  readonly fullScreenButton: Locator;
  readonly fullScreen: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageVideoLogo = page.locator('//header[contains(@class, "desktop-base-header__isVideo")]//a[@href="/video"]');
    this.searchInput = page.locator('//input[@data-testid="search-input"]');
    this.searchButton = page.locator('//button[.="Найти"]');
    this.activeSearchTab = page.locator('//button[@aria-label="Активный поисковый фильтр"]/span[.="Видео и ролики"]');
    this.videoCardLink = page.locator('//a[@data-testid="video-card-clickable"]');
    this.videoControlsPanel = page.locator('//div[@class="zen-ui-video-video-controls__composer _name_area-combined"]');
    this.fullScreenButton = page.locator('//button[@class="zen-ui-video-video-fullscreen-toggle"]');
    this.fullScreen = page.locator('//div[conains(@class, "_is-fullscreen")]');
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
    await expect(this.searchButton).toBeVisible();
    this.searchButton.click();
    await this.page.waitForLoadState();
  }

  async checkActiveSearchTab() {
    await expect(this.activeSearchTab).toBeVisible();
  }

  async clickOnFirstVideo() {
    const [ newPage ] = await Promise.all([
      this.page.waitForEvent('popup'),
      await this.videoCardLink.first().click()
    ])
    return new VideoPage(newPage);
  }

  async checkVideoControlsVisible() {
    await expect(this.videoControlsPanel).toBeVisible();
  }

  async clickOnFullScreenButton() {
    await expect(this.fullScreenButton).toBeVisible();
    await this.fullScreenButton.click();
  }

  async checkFullScreen() {
    await expect(this.fullScreen).toBeVisible();
  }
}