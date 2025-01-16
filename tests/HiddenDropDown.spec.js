const {test, expect} = require('@playwright/test')

test('Hidden options dropdown', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // Login Credentials
    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click() //Navigating to PIM

     //click on drop down (Locator - XPATH)
     await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]").click()

    //waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")  //Multiple options

    for(let option of options)
    {
        const jobTitle = await option.textContent();
        console.log(jobTitle);
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})