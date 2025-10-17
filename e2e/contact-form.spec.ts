import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/contact');
    await expect(page.locator('form')).toBeVisible();
  });

  test('shows validation errors for empty form', async ({ page }) => {
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[data-testid="error-name"]')).toHaveText(/at least 2 characters/i);
  });

  test('submits with valid data', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Thank you for contacting us! We will get back to you within 24 hours.'
        })
      });
    });

    await page.locator('[data-testid="input-name"]').fill('John Doe');
    await page.locator('[data-testid="input-email"]').fill('john@example.com');
    await page.locator('[data-testid="input-subject"]').selectOption('life-insurance');
    await page.locator('[data-testid="input-message"]').fill('I need information about life insurance policies');
    
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('[data-testid="success-message"]')).toHaveText(/thank you/i);
  });

  test('shows error for invalid email format', async ({ page }) => {
    await page.locator('[data-testid="input-name"]').fill('John Doe');
    await page.locator('[data-testid="input-email"]').fill('invalid-email');
    await page.locator('[data-testid="input-email"]').blur();
    await page.locator('[data-testid="input-subject"]').selectOption('life-insurance');
    await page.locator('[data-testid="input-message"]').fill('Test message here');
    
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('[data-testid="error-email"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-email"]')).toHaveText(/invalid email/i);
  });

  test('shows network error on API failure', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.abort('failed');
    });

    await page.locator('[data-testid="input-name"]').fill('John Doe');
    await page.locator('[data-testid="input-email"]').fill('john@example.com');
    await page.locator('[data-testid="input-subject"]').selectOption('life-insurance');
    await page.locator('[data-testid="input-message"]').fill('Test message');
    
    await page.locator('button[type="submit"]').click();
    
    await expect(page.locator('[data-testid="error-message"]')).toHaveText(/network error/i);
  });
});
