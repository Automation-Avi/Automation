import{test} from '@playwright/test';
const {loginPage}=require('../pages/loginPage');
const{test}=require('../fixture');

test('login in new way',async({customPage})=>{

    const userlogin=new loginPage(customPage);

    await userlogin.navigate();
    await userlogin.loginUser('standard_user', 'secret_sauce');



});

