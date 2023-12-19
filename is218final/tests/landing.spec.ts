import { test, expect } from '@playwright/test';

// await page.getByRole('banner').getByRole('link', { name: 'AMOUR DE MER' }).click();
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});
test('homeButton', async ({ page }) => {
  await page.getByRole('banner').getByRole('link', { name: 'AMOUR DE MER' }).click();
  await page.waitForURL('http://localhost:3000/');
  expect(page.url()).toBe('http://localhost:3000/');
});
test('aboutNav', async ({ page }) => {
  await page.getByRole('banner').getByRole('link', { name: 'ABOUT' }).click();
  await page.waitForURL('http://localhost:3000/about');
  expect(page.url()).toBe('http://localhost:3000/about');
});
test('menuButton', async ({ page }) => {
  await page.getByRole('banner').getByRole('link', { name: 'MENU' }).click();
  await page.waitForURL('http://localhost:3000/menu');
  expect(page.url()).toBe('http://localhost:3000/menu');
});
test('reserveButton', async ({ page }) => {
  await page.getByRole('button', { name: 'RESERVE' }).click();
  await page.waitForURL('http://localhost:3000/reservation');
  expect(page.url()).toBe('http://localhost:3000/reservation');
});

test('fullMenuButton', async ({ page }) => {
  await page.getByRole('link', { name: 'VIEW FULL MENU' }).click();
  await page.waitForURL('http://localhost:3000/menu');
  expect(page.url()).toBe('http://localhost:3000/menu');
});

test('learnMore', async ({ page }) => {
  await page.getByRole('link', { name: 'LEARN MORE' }).click();
  await page.waitForURL('http://localhost:3000/about');
  expect(page.url()).toBe('http://localhost:3000/about');
});

test('signUp', async ({ page }) => {
  await page.getByRole('button', { name: 'SIGN UP' }).click();
  await page.waitForURL('http://localhost:3000/signUp');
  expect(page.url()).toBe('http://localhost:3000/signUp');
});


test('heroText', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'INDULGE IN CHILEAN FLAVORS' })).toHaveText(
    "INDULGE IN CHILEAN FLAVORS"
  );
  await expect(page.getByRole('heading', { name: 'TRY OUR SANTIAGO CATCH THIS' })).toHaveText(
    "TRY OUR SANTIAGO CATCH THIS MONTH ONLY GET 10% OFF WHEN YOU RESERVE A TABLE"
  );
});

test('testiText', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'WORDS OF RAPTURE' })).toHaveText(
    "WORDS OF RAPTURE"
  );
  await expect(page.getByRole('heading', { name: 'RHAPSODIES FROM OUR BELOVED' })).toHaveText(
    "RHAPSODIES FROM OUR BELOVED PATRONS"
  );
  await expect(page.getByText('“SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”PIERRE & CHERYL')).toHaveText(
    "“SANCTUARY WHERE LOVE AND SEAFOOD COMBINE.”PIERRE & CHERYL"
  );
  await expect(page.getByText('“WONDERFULLY DIVINE.”STEVE &')).toHaveText(
    "“WONDERFULLY DIVINE.”STEVE & JERMAINE"
  );
  await expect(page.getByText('“THE AMBIANCE INVITED THE FLAMES OF ROMANCE.”SARAH & JAMES')).toHaveText(
    "“THE AMBIANCE INVITED THE FLAMES OF ROMANCE.”SARAH & JAMES"
  );
});

test('aboutText', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'ABOUT' })).toHaveText(
    "ABOUT"
  );
  await expect(page.getByRole('heading', { name: 'DISCOVER THE ESSENCE BEHIND' })).toHaveText(
    "DISCOVER THE ESSENCE BEHIND AMOUR DE MER"
  );
  await expect(page.getByRole('heading', { name: 'In the heart of a bustling' })).toHaveText(
    "In the heart of a bustling coastal town stands an exquisite testament to love and culinary excellence: \"Amour de Mer.\"   This upscale seafood restaurant is more than just a dining establishment; it is a sanctuary for lovers, a place where the symphony of ocean waves meets the artistry of gastronomy."
  );
});

test('signUpText', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'JOIN OUR CULINARY VOYAGE' })).toHaveText(
    "JOIN OUR CULINARY VOYAGE"
  );
  await expect(page.getByRole('heading', { name: 'Unlock exclusive offers and' })).toHaveText(
    "Unlock exclusive offers and savored moments"
  );
});

test('mapText', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'LOCATIONS & HOURS' })).toHaveText(
    "LOCATIONS & HOURS"
  );
  await expect(page.getByRole('heading', { name: 'ATLANTIC CITY' })).toHaveText(
    "ATLANTIC CITY"
  );
  await expect(page.getByText('1133 Boardwalk, Atlantic City')).toHaveText(
    "1133 Boardwalk, Atlantic City, NJ 08401 +1 (609) 555-6789"
  );
  await expect(page.getByRole('heading', { name: 'MON - THURS' })).toHaveText(
    "MON - THURS"
  );
  await expect(page.getByText(':30 PM — 10 PM')).toHaveText(
    "5:30 PM — 10 PM"
  );
  await expect(page.getByRole('heading', { name: 'FRI - SUN' })).toHaveText(
    "FRI - SUN"
  );
  await expect(page.getByText(':30 PM — 12 AM')).toHaveText(
    "5:30 PM — 12 AM"
  );
});


// await expect(page.getByText(':30 PM — 12 AM'));