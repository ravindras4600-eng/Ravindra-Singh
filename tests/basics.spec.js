import { test } from '@playwright/test';
import { expect } from '@playwright/test';
import { userData } from '../data/userData';
import { ExcelReader } from '../utils/ExcelReader.js';
import { PropertyReader } from '../utils/propertyReader.js';
import { logger, Logger } from '../utils/logger.js';

test('login', async ({ page }) => {
    //fixture: Ready to- use setup provided by playwright for a test
    //browser
    //context
    //page
    //const context=await browser.newcontext();
    //const page=await contaxt.newpage();

    const exceluserData = ExcelReader.readExcelFile('userData.xlsx', 'Sheet1');
    console.log(exceluserData);


    //to read properties file


    const properties1 = PropertyReader.readproperties('./config/global.properties');
    console.log(properties1);
    logger.info("Properties file is read...");
    logger.info(properties1);


    await page.goto(`${properties1.BaseURL}`);
    logger.info("goto.....")
    //username
    //password
    //login button click
    await page.waitForTimeout(5000);
    await page.locator("#username").fill(`${userData[0].username}`);
    logger.info("username is entered");
    await page.waitForTimeout(5000);
    await page.locator("#password").fill(`${properties1.password}`);
    logger.info("password is entered");
    await page.waitForTimeout(5000);
    //await page.loccator("[type='submit']").click();f
    //await page.waitForTimeout(5000);
    await page.getByRole("button", { name: "sign in" }).click();
    logger.info("login button clicked");
    await page.waitForTimeout(5000);
    console.log(await page.title());


});