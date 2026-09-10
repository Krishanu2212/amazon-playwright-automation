import { test } from '@playwright/test';
import { ProductPage } from '../pages/product.page';
import { SearchResultsPage } from '../pages/search-results.page';
import { AmazonHomePage } from '../pages/amazon-home.page';
import { CartPage } from '../pages/cart-page.page';
import { searchData } from '../test-data/amazon.data';

test('search TV, filter Samsung and inspect first product', async ({ page }) => {
  const amazonHomePage = new AmazonHomePage(page);

  await amazonHomePage.searchProduct(searchData.searchTerm);

  const searchResultsPage = new SearchResultsPage(page);

  await searchResultsPage.applyBrandFilter(searchData.brand);

  const {productPage, productDataAsin} = await searchResultsPage.openFirstProduct();

  const productPageObject = new ProductPage(productPage);

  const specifications = await productPageObject.getSpecifications();

  for (const specification of specifications) {
    console.log(`${specification.name}: ${specification.value}`);
  }

  const cartPage = new CartPage(productPage);

  await cartPage.addToCart();

  if (productDataAsin === null) {
    throw new Error('Unable to verify product in cart: ASIN not found');
  }
  
  await cartPage.verifyProductInCart(productDataAsin);
});