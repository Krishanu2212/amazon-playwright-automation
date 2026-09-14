import { test } from '../fixtures/amazon.fixture';
import { CartPage } from '../pages/cart-page.page';
import { ProductPage } from '../pages/product.page';
import { searchData } from '../test-data/amazon.data';

test("search product, apply brand filter, open first product, add and verify product in the cart", async ({amazonHomePage, searchResultsPage}) => {
  await amazonHomePage.searchProduct(searchData.searchTerm);

  await searchResultsPage.applyBrandFilter(searchData.brand);

  const {productPage: productPageTab, productDataAsin} = await searchResultsPage.openFirstProduct();

  const productPage = new ProductPage(productPageTab);

  const specifications = await productPage.getSpecifications();

  for (const specification of specifications) {
    console.log(`${specification.name}: ${specification.value}`);
  }

  const cartPage = new CartPage(productPageTab);

  await cartPage.addToCart();

  if (productDataAsin === null) {
    throw new Error('Unable to verify product in cart: ASIN not found');
  }
  
  await cartPage.verifyProductInCart(productDataAsin);
})