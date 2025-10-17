import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await expect(page).toHaveTitle(/4 Bridges Insurance/);
  });

  test('should navigate to About Us page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole('button', { name: /navigate to about us/i }).click();
    await expect(page).toHaveURL(/.*about-us/);
    await expect(page.getByRole('main').getByRole('heading', { level: 1 })).toContainText(/about/i);
  });

  test('should navigate to Life Insurance page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole('button', { name: /products menu/i }).hover();
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: /life insurance/i }).first().click();
    await expect(page).toHaveURL(/.*life-insurance/);
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole('button', { name: /navigate to contact/i }).click();
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.getByRole('main').getByRole('heading', { level: 1 })).toContainText(/contact/i);
  });

  test('should show breadcrumbs on detail pages', async ({ page }) => {
    await page.goto('http://localhost:8080/life-insurance');
    await expect(page.locator('nav[aria-label="Breadcrumb"]')).toBeVisible();
    await expect(page.locator('nav[aria-label="Breadcrumb"]').getByRole('link', { name: /home/i })).toBeVisible();
  });
});
