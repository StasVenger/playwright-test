import { test } from '@playwright/test';
import { MainPage } from '../page-objects/MainPage';
import { VideoPage } from '../page-objects/VideoPage';
import { Navigation } from '../page-objects/Navigation';

test('open video page, search video and check', async ({ page }) => {
  const mainPage = new MainPage(page);
  const navigation = new Navigation(page);
  const videoPage = new VideoPage(page);

  await mainPage.goto();
  await mainPage.checkPageLogo();
  await navigation.clickOnNavigationLink();
  await navigation.checkActiveLink();

  await videoPage.checkVideoLogo();
  await videoPage.enterSearchText('Синий трактор');
  await videoPage.clickSearchButton();
  await videoPage.checkActiveSearchTab();
})