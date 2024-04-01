import { expect, type Locator, type Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly commonSectionElement: string;
  readonly commonCardElement: string;
  readonly firstVideoSection: Locator;
  readonly videoAvatar: Locator;
  readonly videoTitle: Locator;
  readonly videoDescription: Locator;
  readonly subscribe: Locator;
  readonly videoCard: Locator;

  constructor(page: Page) {
    this.commonSectionElement = '//div[.="Статьи"]/ancestor::div[contains(@class, "adaptive-card-grid")]';
    this.commonCardElement = `${this.commonSectionElement}//article[@data-testid="floor-image-card"]`;

    this.page = page;
    this.firstVideoSection = page.locator(`${this.commonSectionElement}`);
    this.videoAvatar = page.locator(`${this.commonCardElement}//div[contains(@class, "zen-ui-avatar")]`);
    this.videoTitle = page.locator(`${this.commonCardElement}//div[@data-testid="card-image-default-title"]`);
    this.videoDescription = page.locator(`${this.commonCardElement}//div[@data-testid="card-image-default-body"]`);
    this.subscribe = page.locator(`${this.commonCardElement}//div[not(contains(@class, 'floor-subscribe-button__hasHidingAnimation'))]/button[.="Подписаться"]`);
    this.videoCard = page.locator(`${this.commonCardElement}`);
  }

  async goto() {
    await this.page.goto('/');
  }

  async scrollToVideoSection() {
    await this.firstVideoSection.first().scrollIntoViewIfNeeded();
    await expect(this.firstVideoSection.first()).toBeVisible();
  }

  async checkVideoAvar() {
    await expect(this.videoAvatar.first()).toBeVisible();
  }

  async checkVideoTitle() {
    await expect(this.videoTitle.first()).toBeVisible();
  }

  async checkVideoDescription() {
    await expect(this.videoDescription.first()).toBeVisible();
  }

  async howerAndCheckSubscribeButton() {
    await this.videoCard.first().hover();
    await expect(this.subscribe.first()).toBeVisible();
  }
}