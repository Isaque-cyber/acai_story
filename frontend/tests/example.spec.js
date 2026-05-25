import { test, expect } from "@playwright/test";

test("deve carregar a página do Açaí Story", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(
    page.getByText("Açaí Story")
  ).toBeVisible();
});