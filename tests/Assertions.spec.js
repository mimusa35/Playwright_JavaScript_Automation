import { test, expect } from '@playwright/test';

test('Hard_Assertions', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/register');   //Open App URL

  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');   //Verify Page contains proper URL or not

  await expect(page).toHaveTitle('nopCommerce demo store. Register');   //Verify Page Title is correct or not

  //Verify logo (Web element) is present or not (locator-- CSS with the class)
  const LogoElement = await page.locator('.header-logo');
  await expect(LogoElement).toBeVisible();

  //Verify search box is enable or not (locator-- CSS with the id)
  const SearchStoreBox = await page.locator('#small-searchterms');
  await expect(SearchStoreBox).toBeEnabled();

  //Verify Radio Button is checked or not (locator-- CSS with the id)
  const MaleRadioButon = await page.locator('#gender-male');
  await MaleRadioButon.click(); //select the male radio Button
  await expect(MaleRadioButon).toBeChecked();

  //Verify Checkbox is checked or not (locator-- CSS with the id)
  const NewsletterCheckBox = await page.locator('#Newsletter');
  await expect(NewsletterCheckBox).toBeChecked();

  //Verify Web element(Register) has attributes (type) or not (locator-- CSS with the id)
  const RegButton = await page.locator('#register-button'); //first locate the web elemet
  await expect(RegButton).toHaveAttribute('type','submit'); 

  //toHaveText() Element matches exact same full text (locator-- CSS with the class)
  const RegisterText = await page.locator('.page-title h1');
  await expect(RegisterText).toHaveText('Register');

  //toContainText() Element contains text, partial text (locator-- CSS with the class)
  const RegText = await page.locator('.page-title h1');
  await expect(RegText).toContainText('Reg');

  //toHaveValue(value): Inputbox having a value or not (locator-- CSS with the id)
  const EmailInputBox = await page.locator('#Email');
  await EmailInputBox.fill('test@gmail.com');
  await expect(EmailInputBox).toHaveValue('test@gmail.com');

  //toHaveCount():List of elements has given length, count number of options in a DropDown (Month Dropdown has 0-12)
  const options = await page.locator("select[name='DateOfBirthMonth'] option");
  await expect(options).toHaveCount(13);
});