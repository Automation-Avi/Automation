import {expect, test} from '@playwright/test';


test('chceckboxes',async({page})=>{


    page.goto('https://the-internet.herokuapp.com/checkboxes');


    await expect (page.getByRole('button',{name:'Checkboxes'})).toBeEnabled();



})