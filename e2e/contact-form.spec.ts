import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
    // Wait for and dismiss cookie banner if present
    const cookieBanner = page.locator('.cookie');
    try {
      await cookieBanner.waitFor({ state: 'visible', timeout: 5000 });
      // Try different button texts that might appear
      const acceptButton = cookieBanner.locator('button').filter({ hasText: /Accept All/ });
      const necessaryButton = cookieBanner.locator('button').filter({ hasText: /Necessary Only/ });
      const saveButton = cookieBanner.locator('button').filter({ hasText: /Save Preferences/ });
      
      if (await acceptButton.isVisible()) {
        await acceptButton.click();
      } else if (await necessaryButton.isVisible()) {
        await necessaryButton.click();
      } else if (await saveButton.isVisible()) {
        await saveButton.click();
      }
      
      // Wait for banner to disappear
      await cookieBanner.waitFor({ state: 'hidden', timeout: 5000 });
    } catch (error) {
      // Banner might not be present or already dismissed
      console.log('Cookie banner not found or already dismissed');
    }
    
    // Ensure form is visible and not blocked
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
    // Mock the API to see if it gets called
    let apiCalled = false;
    await page.route('**/api/contact', async (route) => {
      apiCalled = true;
      await route.fulfill({ status: 200, json: { success: true, message: 'Test' } });
    });

    await page.locator('[data-testid="input-name"]').fill('John Doe');
    await page.locator('[data-testid="input-email"]').fill('invalid-email');
    await page.locator('[data-testid="input-email"]').blur();
    await page.locator('[data-testid="input-subject"]').selectOption('life-insurance');
    await page.locator('[data-testid="input-message"]').fill('Test message here');
    
    // Check if error appears after blur
    const errorElement = page.locator('[data-testid="error-email"]');
    if (await errorElement.isVisible()) {
      await expect(errorElement).toHaveText(/invalid email/i);
      // If error is visible, API should not be called
      expect(apiCalled).toBe(false);
    } else {
      // If not visible after blur, try clicking submit
      await page.locator('button[type="submit"]').click();
      
      // Wait a bit for validation
      await page.waitForTimeout(1000);
      
      if (await errorElement.isVisible()) {
        await expect(errorElement).toHaveText(/invalid email/i);
        // If error is visible after submit, API should not be called
        expect(apiCalled).toBe(false);
      } else {
        // If no error, check if API was called (form submitted)
        expect(apiCalled).toBe(true);
        throw new Error('Form submitted with invalid email - validation not working');
      }
    }
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
