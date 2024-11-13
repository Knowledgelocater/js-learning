//primitive

// 7 types : number , string , null , undefined , bigint , symbol , boolean

// reference type ( non-primitive )

// arrays , objects, fuction

// javascript is dynamically typed language

// const heroes = ["shaktiman" , "Kinshuk"];
// let myObj = {
//     name : "Kinshuk",
//     age : 19,

// }
// const myFunc = function(){
//     console.log("Hello World");
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) // heap(non-primitive)

let employeeOne = {
    email : "kk@gmail.com",
    phoneNumber : 9988999999,
}
let employeeTwo = employeeOne;
employeeTwo.email = "ramesh@gmail.com";
console.log(employeeOne.email);
console.log(employeeTwo.email); // heap ke under refrence  milta hai
