import { Page, expect} from '@playwright/test'

export class CartPage {
    constructor(private page: Page) {}

    async addToCart() {
        await this.page.getByRole('button', {name: 'Add to cart', exact: true}).click();
    }

    async verifyProductInCart(productDataAsin: string) {
        await this.page
            .locator('[id="nav-cart"]')
            .click();

        await expect(this.page.locator(`[role="listitem"][data-asin="${productDataAsin}"]`)).toHaveAttribute('data-asin', productDataAsin);
        
    }
}