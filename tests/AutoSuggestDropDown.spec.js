const {test, expect}=require('@playwright/test')

test('Auto suggest dropdown', async ({page}) =>{
    await page.goto('https://www.redbus.in/');

    // (locator - XPATH from id)
    await page.locator('#src').fill('Delhi'); //search in the 'From' inputbox, then auto suggestion is displayed
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]") //locate all the suggested options

    //wait for the options, it takes few seconds (locator- XPATH), then Capture them into variable in form of array
    const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]") 
   
    for(let option of fromCityOptions)
    {
        const value=await option.textContent() //capture the text
        console.log(value); //print the value
        if(value.includes('Anand Vihar')) //select the value
        {
            await option.click()
            break;  
        }
    }
    await page.waitForTimeout(5000);
});