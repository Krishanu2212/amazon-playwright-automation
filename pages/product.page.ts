import { expect, Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async getSpecifications() {
    const specifications: { name: string; value: string }[] = [];

    const rows = this.page.locator('#productDetails_feature_div tr');

    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i);
      const key = row.locator('th');
      const value = row.locator('td');

      if (await key.count() > 0 && await value.count() > 0) {
        const name = (await key.innerText()).trim();

        if (name === 'Customer Reviews') {
          continue;
        }

        specifications.push({
          name,
          value: (await value.innerText()).trim(),
        });
      }
    }

    expect(specifications.length).toBeGreaterThan(0);

    return specifications;
  }
}