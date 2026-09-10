import { expect, Page } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  async applyBrandFilter(brand: string) {
    await expect(this.page.getByRole('link', {name: `Apply the filter ${brand} to narrow results`}))
      .toBeVisible();

    await this.page.getByRole('link', {name: `Apply the filter ${brand} to narrow results`,}).click();

    await expect(this.page.locator('[role="listitem"][data-component-type="s-search-result"]').first()
      .getByRole('heading')).toContainText(brand);
  }

  async openFirstProduct() {
    const firstProduct = this.page.locator('[role="listitem"][data-component-type="s-search-result"]').first();

    const productDataAsin = await firstProduct.getAttribute("data-asin");

    console.log(productDataAsin);

    const [productPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      firstProduct.getByRole('heading').click(),
    ]);

    await productPage.waitForLoadState();

    return {productPage, productDataAsin};
  }
}