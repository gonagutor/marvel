import { test, expect } from "@playwright/test";

test("characters can be searched", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("search-input").click();
  await page.getByTestId("search-input").fill("Adam");

  await expect(page.getByRole("list")).toContainText("Adam Destine");
  await expect(page.getByRole("list")).toContainText("Adam Warlock");
});

test("favorites can be searched", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page
    .getByRole("button", { name: "Adam Destine Add to favorites" })
    .click();
  await page
    .getByRole("button", { name: "Adam Warlock Add to favorites" })
    .click();

  await page.getByTestId("header-favorites-link").click();

  await expect(page.getByTestId("search-favorite")).toBeVisible();

  await page.getByTestId("search-input").click();
  await page.getByTestId("search-input").fill("Adam Des");

  await expect(page.getByRole("list")).toContainText("Adam Destine");
  await expect(page.getByTestId("search-count")).toContainText("1 Results");
});
