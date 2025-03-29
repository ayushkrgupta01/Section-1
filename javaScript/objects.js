const user ={
    name : 'Ramu',
    email : 'ramu@mail.com',
    password : 'ramu123',
    age : 24
};

console.log(user.name);  //1 way of printing
console.log(user['email']);  //2 way of printing

user.address = 'lucknow'; //1 way of updation
user.password = 'xyz123';

//Ques- but the obj user is const then how we are updating it?
//Ans-  We cannot update object but we can update keys of the object.


user["age"] = user["age"]+1;  //2 way of updation
user.age=user.age+200;
console.log(user);
user["name"] = "Ramu Ji";

console.log(user);

console.log('keys of object');
console.log(Object.keys(user));

console.log('values of object');
console.log(Object.values(user));