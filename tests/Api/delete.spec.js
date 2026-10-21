import{test, expect} from '@playwright/test';

test('delete user',async({request})=>{

    const resp=await request.delete('http://localhost:3000/users/3');

    await expect(resp.status()).toBe(200);

});