# Amazon Playwright Automation

## Overview
This Project automates the process of searching for a TV of 55 inch on amazon, applying the brand filter, selecting the first product from the results, printing the specifications of that particular product, adding that product to the cart and verifying the cart has the product added.

## Tech Stack
Playwright, TypeScript, Node.js.

## Test Scenerio
1. Open Amazon
2. Search for "TV 55 inch"
3. Apply Samsung brand filter
4. Verify filtered result
5. Open first product
6. Extract specifications
7. Add product to cart
8. Verify product in cart using ASIN

## Project Structure
pages/
  amazon-home.page.ts
  search-results.page.ts
  product.page.ts
  cart-page.page.ts

test-data/
  amazon.data.ts

tests/
  amazon.spec.ts

## Setup
npm install
npx playwright install

## Running tests
npx playwright test

## Test Reporting
npx playwright show-report

## CI
GitHub Actions runs the Playwright test suite on pushes/PRs.

## Notes
The automation interacts with Amazon's live website, so search results and filter availability may vary depending on the session/environment.