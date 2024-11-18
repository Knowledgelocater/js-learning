const name = "Kinsuk";
const repoCount = 100;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kinshukla');

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);


console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4); // we can use - index in the slice and it will evaluate 
// if we use - index in substring it will restart from 0.
console.log(newString); 

const userName = "    Kinshuk    ";
console.log(userName);
console.log(userName.trim());


const url = "https://Kinshuk.com/ramesh%20babu";
console.log(url.replace('%20', '_'));


console.log(url.includes('Kinshuk')); 

console.log(url.split('/'));


// string javascript mdn isko google pe search karo or reading do 