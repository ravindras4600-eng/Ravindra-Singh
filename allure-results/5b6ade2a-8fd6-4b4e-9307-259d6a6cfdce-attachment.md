# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basics.spec.js >> login
- Location: tests\basics.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://automationpracticehub.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { expect } from '@playwright/test';
  3  | import { userData } from '../data/userData';
  4  | import { ExcelReader } from '../utils/ExcelReader.js';
  5  | 
  6  | test('login', async ({ page }) => {
  7  |     //fixture: Ready to- use setup provided by playwright for a test
  8  |     //browser
  9  |     //context
  10 |     //page
  11 |     //const context=await browser.newcontext();
  12 |     //const page=await contaxt.newpage();
  13 | 
  14 |     const exceluserData = ExcelReader.readExcelFile('userData.xlsx', 'Sheet1');
  15 |     console.log(exceluserData);
  16 | 
> 17 |     await page.goto("https://automationpracticehub.com/");
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  18 |     //username
  19 |     //password
  20 |     //login button click
  21 |     await page.waitForTimeout(5000);
  22 |     await page.locator("#username").fill(`${userData[0].username}`);
  23 |     await page.waitForTimeout(5000);
  24 |     await page.locator("#password").fill(`${exceluserData[0].password}`);
  25 |     await page.waitForTimeout(5000);
  26 |     //await page.loccator("[type='submit']").click();f
  27 |     //await page.waitForTimeout(5000);
  28 |     await page.getByRole("button", { name: "sign in" }).click();
  29 |     await page.waitForTimeout(5000);
  30 |     console.log(await page.title());
  31 | 
  32 | 
  33 | });
```