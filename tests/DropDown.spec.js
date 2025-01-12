const {test, expect}=require('@playwright/test')

test.setTimeout(7000);

test("Handle Single Selection dropdown",async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

  // Ensure dropdown is visible
  await expect(page.locator('#country')).toBeVisible();

  // Wait for dropdown options to load (attached state)
  await page.waitForSelector('#country option', { state: 'attached', timeout: 6000 });

    //DropDown With Select tag- Multiple ways to select an option from the dropdown
    await page.locator("#country").selectOption({label:'India'});  //by using label (visible text)
    await page.locator("#country").selectOption('India');  //Directly using visible text
    await page.locator("#country").selectOption({value: 'uk'}); // by using value
    await page.locator("#country").selectOption({index: 1});  // by using index
    await page.selectOption("#country",'India'); //by text
    
    //Select an option from dropdown using loop - if there is no select tag
    const options=await page.$$('#country option');
    let optionFound = false; // Flag to track if "France" is found
    for (const option of options) {
      const value = (await option.textContent()).trim(); // Normalize text
      console.log(value); // Log the option text
      if (value === 'France') {
        await page.selectOption("#country", value);
        optionFound = true; // Set the flag
        break;
    }
  }

//Assertions
  //1) check number of options in dropdown - Approach1
    const dropdownOptions = await page.locator('#country option')
    await expect(dropdownOptions).toHaveCount(10);

  //2) check number of options in dropdown - capture all the options in array format($$) - Appraoch2
    const optionsArray = await page.$$('#country option')
    console.log("Number of options:", optionsArray.length) //print total number of options
    await expect(optionsArray.length).toBe(10);

  //3) check presence of value / particular value is present or not in the dropdown - Appraoch1 -calling director function
  //check india is present in the dropdown or not
   const content = await page.locator('#country').textContent()
   await expect(content.includes('India')).toBeTruthy();

  //4) check presence of value/ particular value is present or not in the dropdown - Approach 2 - using looping
  // In case of bootstrap or there is no select tag
   const dropdownContent = await page.$$('#country option')//Captures all <option> elements inside country dropdown in array. 
   let status=false;  
   //Initializes a variable status with false. It's a flag used to indicate whether the option "India" is found or not. 
   //Initially, it's set to false because the search hasn't started yet.
   
   for(const option of dropdownContent)
   {
      console.log(await option.textContent())
      let value=await option.textContent(); 
      //Extracts the visible text content of the current <option> element asynchronously. This represents the country name.
      if(value.includes('India'))
      {
        status=true;
        break;
      }
    }
    expect(status).toBeTruthy();
});