import{test,expect}from '@playwright/test';


test('handle dropdown',async({page})=>{

    await page.goto('https://www.playwrightautomation.com/practice.html#section-dropdowns');
   let isDuplicate=false;
    const dropdown=await page.locator('#country').allTextContents();
    console.log(dropdown);

    for(let i=0; i<dropdown.length; i++){
     for(let j=i+1; j<dropdown.length; j++){
        if(dropdown[i]==dropdown[j]){
            isDuplicate=true;
            break;
        }
    
     }
    }
    if(isDuplicate){
        break;
    }
    await expect(isDuplicate).toBe(false);

});