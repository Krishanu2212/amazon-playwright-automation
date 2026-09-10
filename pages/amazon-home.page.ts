import { expect, Page } from '@playwright/test';

export class AmazonHomePage {
  constructor(private page: Page) {}

  async searchProduct(brand: string) {
    await this.page.goto('https://www.amazon.in');

    await this.page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill(brand);

    await this.page.getByRole('button', { name: 'Go', exact: true }).click();

    await expect(this.page.locator('[role="listitem"][data-component-type="s-search-result"]').first()).toBeVisible();
  }
}