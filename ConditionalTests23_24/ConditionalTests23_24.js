var number = 5;
// Test1  
console.log('Is number equal to 5? I predict True');
console.log(number === 5);
// Test2
console.log('Is number equal to 10? I predict True');
console.log(number === 10);
// Test3
console.log('Is number not equal to 10? I predict True');
console.log(number != 10);
// Test4
console.log('Is number not equal to 10 & not equal to 5? I predict True');
console.log(number != 10 && number != 5);
// Test5 
console.log('Is number not equal to 10 Or equal to 10? I predict True');
console.log(number != 10 || number === 10);
// Test6 
console.log('Is number not equal to 10 Or equal to 10? I predict True');
console.log(number != 10 || number === 10);
// Test7 
console.log('Is number Greater than 1 and 5? I predict True');
console.log(number > 1 && number > 5);
// Test8 
console.log('Is number Greater than 1 or 5? I predict True');
console.log(number > 1 || number > 5);
// Test 9
console.log('Is number divided by 3 equal to 2? I predict False');
console.log(number / 3 === 2);
// Test 10:
console.log('Is number multiplied by 5 equal to 35? I predict False');
console.log(number * 5 === 35);
var names = "Ali";
// Test 11:
console.log('Is names to ali? I predict True');
console.log(names.toLowerCase() === "ali");
// Test 12:
console.log('Is names to Ali? I predict True');
console.log(names.toString() === names);
// Array
var fruits = ['Apple', 'Banana', 'Orange'];
// Use type assertion to inform TypeScript about the includes method
console.log('Check if Grapefruit is present or not: ' + fruits.includes('Grapefruit'));
// Use type assertion to inform TypeScript about the includes method
console.log('Check if Apple is present or not: ' + fruits.includes('Apple'));
// Test 13: Equality test with strings
var str1 = "Hello";
var str2 = "hello";
console.log("Are ".concat(str1, " and ").concat(str2, " equal? I predict False"));
console.log(str1 === str2);
// Test 14: Inequality test with strings
var country1 = "USA";
var country2 = "Canada";
console.log("Are ".concat(country1, " and ").concat(country2, " not equal? I predict True"));
console.log(country1 !== country2);
// Test 15: Lowercase test with strings
var word = "Programming";
console.log("Is the word \"".concat(word, "\" in lowercase equal to \"programming\"? I predict True"));
console.log(word.toLowerCase() === "programming");
// Test 16: Numerical test - greater than
var num1 = 15;
var num2 = 10;
console.log("Is ".concat(num1, " greater than ").concat(num2, "? I predict True"));
console.log(num1 > num2);
// Test 17: Numerical test - less than or equal to
var age1 = 25;
var age2 = 30;
console.log("Is ".concat(age1, " less than or equal to ").concat(age2, "? I predict True"));
console.log(age1 <= age2);
// Test 18: Logical AND operator
var x = 5;
var y = 8;
console.log("Is ".concat(x, " greater than 3 and ").concat(y, " less than 10? I predict True"));
console.log(x > 3 && y < 10);
// Test 19: Logical OR operator
var z = 2;
console.log("Is ".concat(x, " greater than 5 or ").concat(z, " equal to 2? I predict True"));
console.log(x > 5 || z === 2);
// Test 20: Array membership test
var animals = ['dog', 'cat', 'rabbit'];
var animalToCheck = 'cat';
console.log("Is ".concat(animalToCheck, " in the array? I predict True"));
console.log(animals.includes(animalToCheck));
// Test 21: Array non-membership test
var fruitToCheck = 'Grapes';
console.log("Is ".concat(fruitToCheck, " not in the array? I predict True"));
console.log(!fruits.includes(fruitToCheck));
