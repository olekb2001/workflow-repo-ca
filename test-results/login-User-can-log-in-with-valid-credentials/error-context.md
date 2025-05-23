# Test info

- Name: User can log in with valid credentials
- Location: C:\Users\olkb2\workflow-repo-ca\tests\login.spec.js:9:5

# Error details

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="email"]')

    at C:\Users\olkb2\workflow-repo-ca\tests\login.spec.js:12:14
```

# Page snapshot

```yaml
- text: Cannot GET /login.html
```

# Test source

```ts
   1 | // tests/login.spec.js
   2 | import { test, expect } from '@playwright/test';
   3 | import dotenv from 'dotenv';
   4 |
   5 | dotenv.config();
   6 |
   7 | const { LOGIN_USERNAME, LOGIN_PASSWORD, BASE_URL } = process.env;
   8 |
   9 | test('User can log in with valid credentials', async ({ page }) => {
  10 |   await page.goto(`${BASE_URL}/login.html`);
  11 |
> 12 |   await page.fill('input[name="email"]', LOGIN_USERNAME);
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  13 |   await page.fill('input[name="password"]', LOGIN_PASSWORD);
  14 |   await page.click('button[type="submit"]');
  15 |
  16 |   await expect(page.locator('text=Welcome')).toBeVisible({ timeout: 5000 });
  17 | });
  18 |
  19 | test('User sees error with invalid credentials', async ({ page }) => {
  20 |   await page.goto(`${BASE_URL}/login.html`);
  21 |
  22 |   await page.fill('input[name="email"]', 'wrong@example.com');
  23 |   await page.fill('input[name="password"]', 'wrongpassword');
  24 |   await page.click('button[type="submit"]');
  25 |
  26 |   await expect(page.locator('#message-container')).toContainText('noroff.no');
  27 | });
  28 |
```