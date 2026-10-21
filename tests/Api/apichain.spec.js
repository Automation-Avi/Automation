import{test,expect}from '@playwright/test';

test('api chaining',async({request})=>{

const postReq=await request.post('http://localhost:3000/users',{

    data:{

        name:'Zarvi',
        email:`test${Date.now()}@gmail.com`
    }
});
 const postBody=await postReq.json();
 const userId=postBody.user.id;
expect (userId).toBeTruthy();
await expect(postReq.status()).toBe(201);
await expect(postBody.user.name).toBe('Zarvi');
console.log(postBody);
const getReq=await request.get(`http://localhost:3000/users/${userId}`);
await expect(getReq.status()).toBe(200);
const getBody=await getReq.json();
console.log(getBody);
const patchReq=await request.patch(`http://localhost:3000/users/${userId}`,{

    data:{
       name:'Ravi'
    }
});

await expect(patchReq.status()).toBe(200);
const patchBody=await patchReq.json();
await expect(patchBody.user.name).toBe('Ravi');
console.log(patchBody);
const deleteReq=await request.delete(`http://localhost:3000/users/${userId}`);
await expect(deleteReq.status()).toBe(200);

});