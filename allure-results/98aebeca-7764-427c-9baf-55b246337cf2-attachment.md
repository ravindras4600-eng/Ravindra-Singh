# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basics.spec.js >> login
- Location: tests\basics.spec.js:7:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'Password')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [active] [ref=e8]: sagesyntaxacademy
        - paragraph
      - generic [ref=e9]:
        - generic [ref=e10]: Password
        - textbox "Password" [ref=e11]
        - paragraph [ref=e12]: Please enter password.
      - combobox [ref=e14]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e15]:
        - generic [ref=e16]:
          - radio "Admin" [checked] [ref=e17]
          - generic [ref=e18]: Admin
        - generic [ref=e19]:
          - radio "User" [ref=e20]
          - generic [ref=e21]: User
      - generic [ref=e22]:
        - checkbox "I Agree to the terms and conditions" [ref=e23]
        - generic [ref=e24]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e26] [cursor=pointer]:
            - /url: "#"
      - button "Sign In" [ref=e28]
      - paragraph [ref=e29]:
        - text: The username is
        - mark [ref=e30]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e31]: BuildingExcellence@111
        - text: .
  - alert [ref=e32]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { expect } from '@playwright/test';
  3  | import { userData } from '../data/userData';
  4  | import { ExcelReader } from '../utils/ExcelReader.js';
  5  | import { PropertyReader } from '../utils/propertyReader.js';
  6  | 
  7  | test('login', async ({ page }) => {
  8  |     //fixture: Ready to- use setup provided by playwright for a test
  9  |     //browser
  10 |     //context
  11 |     //page
  12 |     //const context=await browser.newcontext();
  13 |     //const page=await contaxt.newpage();
  14 | 
  15 |     const exceluserData = ExcelReader.readExcelFile('userData.xlsx', 'Sheet1');
  16 |     console.log(exceluserData);
  17 | 
  18 |     const properties1 = PropertyReader.readproperties('./config/global.properties');
  19 |     console.log(properties1);
  20 | 
  21 | 
  22 |     await page.goto(`${properties1.BaseURL}`);
  23 |     //username
  24 |     //password
  25 |     //login button click
  26 |     await page.waitForTimeout(5000);
  27 |     await page.locator("#username").fill(`${userData[0].username}`);
  28 |     await page.waitForTimeout(5000);
> 29 |     await page.locator("#password").fill(`${exceluserData[0].Password}`);
     |                                                              ^ TypeError: Cannot read properties of undefined (reading 'Password')
  30 |     await page.waitForTimeout(5000);
  31 |     //await page.loccator("[type='submit']").click();f
  32 |     //await page.waitForTimeout(5000);
  33 |     await page.getByRole("button", { name: "sign in" }).click();
  34 |     await page.waitForTimeout(5000);
  35 |     console.log(await page.title());
  36 | 
  37 | 
  38 | });
```