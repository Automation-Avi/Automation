import{test, expect}from'@playwright/test';

test('basic get',async({request})=>{

    const response=await request.get("http://localhost:3000/users");
    const body=await response.json();
    console.log(body);
    await expect(response.status()).toBe(200);
    await expect(body.id).toBe(1);

})