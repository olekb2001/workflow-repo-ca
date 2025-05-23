# Test info

- Name: User can log in with valid credentials
- Location: C:\Users\olkb2\workflow-repo-ca\tests\login.spec.js:9:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500//login.html
Call log:
  - navigating to "http://127.0.0.1:5500//login.html", waiting until "load"

    at C:\Users\olkb2\workflow-repo-ca\tests\login.spec.js:10:14
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
> 10 |   await page.goto(`${BASE_URL}/login.html`);
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500//login.html
  11 |   await page.fill('input[name="email"]', LOGIN_USERNAME);
  12 |   await page.fill('input[name="password"]', LOGIN_PASSWORD);
  13 |   await page.click('button[type="submit"]');
  14 |
  15 |   await expect(page.locator('text=Welcome')).toBeVisible();
  16 | });
  17 |
  18 | test('User sees error with invalid credentials', async ({ page }) => {
  19 |   await page.goto(`${BASE_URL}/login.html`);
  20 |   await page.fill('input[name="email"]', 'wrong@example.com');
  21 |   await page.fill('input[name="password"]', 'wrongpassword');
  22 |   await page.click('button[type="submit"]');
  23 |
  24 |   await expect(page.locator('text=Invalid email or password')).toBeVisible();
  25 | });
  26 |
```
