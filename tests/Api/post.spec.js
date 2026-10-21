import{test,expect} from '@playwright/test';


test('create with post',async({request})=>{

    const Response=await request.post('http://localhost:3000/users',{

        data:{
          name:'Ravi',
          email:'mehraasahil@gmail.com'

        }
    });
    
    await expect(Response.status()).toBe(201);
    const body=await Response.json();
    console.log(body);
  await expect(body.user.name).toBe('Ravi');


});
