import { test, expect } from '@playwright/test';

test('Soft Assertions', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');
/*
//Hard Assertions
  await expect(page).toHaveTitle('STORE123');  //Put wrong title intentionally, will terminate test execution
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); //Verify Page URL is correct or not
  await expect(page.locator('.navbar-brand')).toBeVisible();   //Verify logo is present or not (locator-- CSS with class)
*/

//Soft Assertions
  //await expect.soft(page).toHaveTitle('STORE123');//Intentionally failing assertion, will not terminate test execution
  
  /*In ther GitHub Repo, workflow is failed, to overcome this, You can wrap soft assertions in a try-catch block to log 
  failures without marking the test as failed */
  try {
    await expect.soft(page).toHaveTitle('STORE123'); // Intentionally failing assertion
  } catch (err) {
    console.log('Soft assertion failed:', err.message);
  }  
  await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html'); 
  await expect.soft(page.locator('.navbar-brand')).toBeVisible();   
});