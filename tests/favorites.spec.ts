import { test, expect } from "@playwright/test";

test("characters can be added to favorites", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Check that no favorites have been added
  await expect(page.getByTestId("header-favorites-link")).toContainText("0");

  // Check that the count is correct and no favorites are added
  await page.getByTestId("header-favorites-link").click();
  await expect(page.getByTestId("character-list-empty")).toBeVisible();

  // Go back to homepage and add 3-D Man as favorites and check that the count is updated
  await page.getByTestId("header-homepage-link").click();
  await page.getByRole("button", { name: "-D Man Add to favorites" }).click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("1");

  // Go to the favorites page and check that it has been added
  await page.getByTestId("header-favorites-link").click();
  await expect(page.getByRole("list")).toContainText("3-D Man");
});

test("characters can be removed from favorites", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Add 3 characters to favorites
  await page.getByRole("button", { name: "-D Man Add to favorites" }).click();
  await page
    .getByRole("button", { name: "A-Bomb (HAS) Add to favorites" })
    .click();
  await page.getByRole("button", { name: "A.I.M. Add to favorites" }).click();

  // Navigate to favorites
  await page.getByTestId("header-favorites-link").click();

  // Expect the 3 added characters to be there
  await expect(page.getByRole("list")).toContainText("3-D Man");
  await expect(page.getByRole("list")).toContainText("A-Bomb (HAS)");
  await expect(page.getByRole("list")).toContainText("A.I.M.");

  // Remove characters and check if they are removed and the count is lowered
  await page.getByRole("button", { name: "A-Bomb (HAS) Remove from" }).click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("2");
  await page
    .getByRole("button", { name: "A.I.M. Remove from favorites" })
    .click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("1");
  await page
    .getByRole("button", { name: "-D Man Remove from favorites" })
    .click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("0");

  // Check that the no characters added to favorites text is shown
  await expect(page.getByTestId("character-list-empty")).toBeVisible();
});

test("character can be added or remove from favorites from it's details screen", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/details/1011334");

  await expect(page.getByTestId("header-favorites-link")).toContainText("0");
  await page.getByRole("button", { name: "Add to favorites" }).click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("1");

  await page.getByRole("button", { name: "Remove from favorites" }).click();
  await expect(page.getByTestId("header-favorites-link")).toContainText("0");
});
