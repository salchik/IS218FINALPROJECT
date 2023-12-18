import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('aboutButton', async ({ page }) => {
    await Promise.all([
      page.waitForLoadState('domcontentloaded'), 
      page.click('text=ABOUT'),
    ]);
    await page.waitForURL('http://localhost:3000/about');
    expect(page.url()).toBe('http://localhost:3000/about');
  });
  test('menuButton', async ({ page }) => {
    await Promise.all([
      page.waitForLoadState('domcontentloaded'), 
      page.click('text=MENU'),
    ]);
    await page.waitForURL('http://localhost:3000/menu');
    expect(page.url()).toBe('http://localhost:3000/menu');
  });
  test('reserveButton', async ({ page }) => {
    await Promise.all([
      page.waitForLoadState('domcontentloaded'), 
      page.click('text=RESERVE'),
    ]);
    await page.waitForURL('http://localhost:3000/reservation');
    expect(page.url()).toBe('http://localhost:3000/reservation');
  });
