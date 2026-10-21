import{test,expect} from '@playwright/test';

test('update name',async({request})=>{

    const response=await request.patch('http://localhost:3000/users/2',{

        data:{
              name:'Abhi'
        }
    });

    await expect(response.status()).toBe(200);

   const body=await response.json();
   await expect(body.user.name).toBe('Abhi');
});
