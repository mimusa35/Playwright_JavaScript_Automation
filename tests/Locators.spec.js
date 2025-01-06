import { test, expect } from '@playwright/test';     

test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
  
    // Click on login button --Property
    await page.click('id=login2')                                                                                                               

    // Provide Username --CSS
    await page.fill('#loginusername','mimusa')

    // Provide Password --CSS
    await page.fill("input[id='loginpassword']", 'test123')

    // Click on Login Button --XPATH
    await page.click("//button[normalize-space()='Log in']")

    // Verify the Logout link present --XPATH
    const logoutlink = await page.locator("//a[@id='logout2']")
    await expect(logoutlink).toBeVisible();


    // Location multiple elements --Capture and print all links from the home page
    const alllinks = await page.$$('a');

    for(const link of alllinks)
    {
        const linktext = await link.textContent();
        console.log(linktext);
    }

    // Location multiple elements --Capture and print all product names
    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");
    
    for (const product of products)
    {
        const productName= await product.textContent();
        console.log(productName);
    }
    
    await page.close();
  });