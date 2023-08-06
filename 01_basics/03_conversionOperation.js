let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1; 
false => 0;
*/

let isLoggedIn = "raaz";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*[In Boolean Conversion]
1 => true;
0 => false;
"" => false;
"rajnish" => true;
*/

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************** Operations *************** 

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Rajnish";
let str3 = str1+str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 10 / 5);

let gameCounter = 100;
let postfix = gameCounter++;

// console.log(gameCounter, postfix);

let gameCounter2 = 100;
let prefix = ++gameCounter2;

// console.log(gameCounter, prefix);
