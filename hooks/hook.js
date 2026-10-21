const{loginPage}=require('../pages/loginPage');
const{test,expect}=require('@playwright/test');

let userlogin;
test.beforeEach('url setup',async({page})=>{
    userlogin=new loginPage(page);    
    await userlogin.navigate();

});

