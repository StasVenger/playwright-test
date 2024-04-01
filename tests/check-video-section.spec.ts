import { test } from '@playwright/test';
import { MainPage } from '../page-objects/MainPage';

test('avatar, title, description and button should visible', async ({ page }) => {
  const mainPage = new MainPage(page);

  await mainPage.goto();
  await mainPage.scrollToVideoSection();
  await mainPage.checkVideoAvar();
  await mainPage.checkVideoTitle();
  await mainPage.checkVideoDescription();
  await mainPage.howerAndCheckSubscribeButton();
})