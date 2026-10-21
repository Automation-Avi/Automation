import{test} from '@playwright/test';

test('i frame', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');

  
    const topFrame = page.frameLocator('frame[name="frame-top"]');

  
    const leftText = await topFrame
        .frameLocator('frame[name="frame-left"]')
        .locator('body')
        .textContent();

    console.log('Left Text : ', leftText);

    await expect(
        topFrame
            .frameLocator('frame[name="frame-left"]')
            .locator('body')
    ).toHaveText('LEFT');



});
