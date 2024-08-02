import { test, expect } from "@playwright/test";

test("name is visible", async ({ page }) => {
  await page.goto("http://localhost:3000/details/1010354");

  await expect(page.getByTestId("character-name")).toBeVisible();
});

test("description is visible", async ({ page }) => {
  await page.goto("http://localhost:3000/details/1010354");

  await expect(page.getByTestId("character-description")).toBeVisible();
});

test("image is visible", async ({ page }) => {
  await page.goto("http://localhost:3000/details/1010354");

  await expect(page.getByTestId("character-image")).toBeVisible();
});

test("comics are shown", async ({ page }) => {
  await page.goto("http://localhost:3000/details/1010354");

  await expect(page.getByTestId("comic-list")).toBeVisible();
});
