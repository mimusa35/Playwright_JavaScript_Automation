import { test, expect } from '@playwright/test';

test('Handle Inputbox', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');

  await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();

  await page.fill("//input[@id='FirstName']", "mimusa");
  await page.waitForTimeout(5000);  //pausing code
});

test('Handle Radio Button', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register');
  
  ////select the male radio Button (locator-- CSS with the id) 
  await page.locator('#gender-male').check();
  //await page.locator('#gender-male').click();
  await expect(await page.locator('#gender-male')).toBeChecked();
  await expect(await page.locator('#gender-male').isChecked()).toBeTruthy;   //Male //Returns True or False
  await expect(await page.locator('#gender-female').isChecked()).toBeFalsy;   //Female Radio button is not checked
});

test('Handle Checkbox', async ({ page }) => {
  await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');
  
  //Single Checkbox
  await page.locator("//input[@id='id_checkboxes_0']").check();
  await expect(await page.locator("//input[@id='id_checkboxes_0']")).toBeChecked();
  await expect(await page.locator("//input[@id='id_checkboxes_0']").isChecked()).toBeTruthy;
  await page.waitForTimeout(5000);  //pausing code

  //Multiple Checkboxes
  const checkboxLocators = [
    "//input[@id='id_checkboxes_0']",
    "//input[@id='id_checkboxes_1']",
    "//input[@id='id_checkboxes_2']"
  ];
for(const locators of checkboxLocators)   // Select Multiple checkbox
{
    await page.locator(locators).check();
}
await page.waitForTimeout(5000);  //pausing code

for(const locators of checkboxLocators)   // UnSelect Multiple checkbox which are already selected
{
    if(await page.locator(locators).isChecked())
    {
      await page.locator(locators).uncheck();
    }   
}

});