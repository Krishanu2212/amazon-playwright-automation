# Amazon Playwright Automation

## Overview

This project automates the process of searching for a 55-inch TV on Amazon, applying the brand filter, selecting the first product from the results, printing the specifications of that product, adding it to the cart, and verifying that the product was added successfully.

## Tech Stack

Playwright, TypeScript, Node.js.

## Test Scenario

1. Open Amazon
2. Search for "TV 55 inch"
3. Apply Samsung brand filter
4. Verify filtered result
5. Open first product
6. Extract specifications
7. Add product to cart
8. Verify product in cart using ASIN

## Project Structure

Pages

- amazon-home.page.ts
- search-results.page.ts
- product.page.ts
- cart-page.page.ts

Fixtures

- amazon.fixture.ts

Test Data

- amazon.data.ts

Tests

- amazon.spec.ts

## Fixture Design

`AmazonHomePage` and `SearchResultsPage` are provided through Playwright fixtures since they both use the test's built-in `page` fixture and are used throughout the main test flow.

`ProductPage` and `CartPage` are created directly in the test because they use the product tab that is opened during the test. This keeps the fixtures simple while allowing the test to control the flow of the scenario.

## Setup

npm install

npx playwright install

## Running Tests

npx playwright test

## Test Reporting

npx playwright show-report

## CI

GitHub Actions runs the Playwright test suite on pushes and pull requests.

## Notes

The automation interacts with Amazon's live website, so search results and filter availability may vary depending on the session and environment.