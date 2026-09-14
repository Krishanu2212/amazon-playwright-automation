import { test as base } from '@playwright/test';
import { AmazonHomePage } from '../pages/amazon-home.page';
import { SearchResultsPage } from '../pages/search-results.page';

type Fixtures = {
  amazonHomePage: AmazonHomePage;
  searchResultsPage: SearchResultsPage;
};

export const test = base.extend<Fixtures>({
  amazonHomePage: async ({ page }, use) => {
    const amazonHomePage = new AmazonHomePage(page);
    await use(amazonHomePage);
  },

  searchResultsPage: async ({page}, use) => {
    const searchResultsPage = new SearchResultsPage(page);
    await use(searchResultsPage);
  },
});