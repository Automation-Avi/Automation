const{test:base,expect} =require('@playwright/test');

const test=base.extend({

    customPage:async({page},use)=>{

        await page.setViewPortSize({

         height:1280,
         width:770,
        });

        await use(page);
    }

});

module.exports=({
test,expect
});