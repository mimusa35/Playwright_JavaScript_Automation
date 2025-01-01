const { test, expect } = require('@playwright/test'); 

test('Home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
  
    // verify the title of the home page is store or not? 
    const PageTitle = await page.title();
    console.log('Page Title is:',PageTitle) //print (Capture the title)
  
    await expect(page).toHaveTitle('STORE'); 

    // verify the URL is correctly open or not?  
    const PageURL = page.url();
    console.log('Page URL is:',PageURL) 

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
  });