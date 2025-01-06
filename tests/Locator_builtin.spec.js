import { test, expect } from '@playwright/test';  
   
/*
page.getByAltText() to locate an element, usually image, by its text alternative. 
page.getByPlaceholder() to locate an input by placeholder. 
page.getByRole() to locate by explicit and implicit accessibility attributes. 
page.getByText() to locate by text content. 
page.getByLabel() to locate a form control by associated label's text. 
page.getByTitle() to locate an element by its title attribute. 
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Builtin_Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  
    // Check the logo is present or not
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    // Check the placeholder attribute is available in login page
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    
    //Login button
    await page.getByRole('button', {type: 'submit'}).click()

    // Verify User name by text content after login
    // await expect (await page.getByText('Bharani user')).toBeVisible()
    // But Username is not same all the time, so have to retrieve and verify
    const username = await page.locator ("//p[@class='oxd-userdropdown-name']").textContent();
    await expect (await page.getByText(username)).toBeVisible();

    await page.close();
  });