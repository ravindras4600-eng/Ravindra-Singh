 import { test } from '@playwright/test';

test('login', async function testPlaywright({ browser }) {
    //fixture: Ready to- use setup provided by playwright for a test
    //browser
    //context
    //page
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://automationpracticehub.com/");
    //username
    //password
    //login button click
    await page.waitForTimeout(5000);

});