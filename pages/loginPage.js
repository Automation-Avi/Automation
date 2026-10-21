
const { safeClick, safeFill ,expectedTitle,viewport} = require('../Utility/commonUtility');
class loginPage{

    constructor (page){
     this.page=page;
     this.userName= page.locator('#user-name');
     this.userPassword= page.locator('#password');
     this.loginBtn=page.locator('#login-button');
     this.title=page.locator("//span[@data-test='title']");
    }

   
    async navigate(){
        await this.page.goto('https://www.saucedemo.com/');
    }


    async enterUserName(username){
        await safeFill(this.userName,username);

    }

    async  enterPassword(password) {
        
        await safeFill(this.userPassword,password);
    }
    async clickBtn(){
       await safeClick(this.loginBtn);
    }
    async verifyTitle(){
        await expectedTitle(this.title);
    }

    async loginUser(username,password){
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickBtn();
        await this.verifyTitle();
    }

    async changeViewPort(height ,width){
        await viewport(this.page,height,width);

    }

}
module.exports = { loginPage };