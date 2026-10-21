import {expect} from  '@playwright/test';



async function safeClick(locator){
    await locator.click();

}

async function safeFill(locator,value) {
    await locator.fill(value);
}

async function getText(locator) {
    await locator.innerText();
}

async function expectedTitle(locator) {
    await expect(locator).toBeVisible();
}

async function expectedUrl(page,expectedURL) {
    
    await expect(page).toHaveUrl(expectedURL);
}

async function viewport(page,width,height) {

    await page.setViewportSize({

    height:height,
    width:width
    })   
}
module.exports={
safeClick,
safeFill,
getText,
expectedTitle,
expectedUrl,
viewport
}