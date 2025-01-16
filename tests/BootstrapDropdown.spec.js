const {test, expect}=require('@playwright/test')

test('Boostrap dropdown', async ({page}) =>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click() // click on the dropdown

//Assertions
    //1 Capture all the options and count (Locator - CSS)
    const options=await page.locator('ul>li label input')
    await expect(options).toHaveCount(11);

    //2 In form of Array
    const InputLabel=await page.$$('ul>li label input')
    await expect(InputLabel.length).toBe(11)

    //3 select multiple options (Anugular and Java) from dropdown
    const Selectoptions=await page.$$('ul>li label')
    for(let option of Selectoptions) //value kept changing thats why let is used
    {
        const value=await option.textContent(); 
        //const value=await option.innerText();
        console.log("value is",value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }

    }

    // deselect options which are already selected
    const deselectoptions=await page.$$('ul>li label')
    for(let option of deselectoptions)
    {
        const value=await option.textContent();
        console.log("value is",value)
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click()
        }

    }
    await page.waitForTimeout(5000);
});