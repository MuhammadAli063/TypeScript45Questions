let number = 5;

// Test1  
console.log('Is number equal to 5? I predict True');
console.log(number===5);

// Test2
console.log('Is number equal to 10? I predict True');
console.log(number===10);

// Test3
console.log('Is number not equal to 10? I predict True');
console.log(number!=10);

// Test4
console.log('Is number not equal to 10 & not equal to 5? I predict True');
console.log(number!=10 && number!=5);

// Test5 
console.log('Is number not equal to 10 Or equal to 10? I predict True');
console.log(number!=10 || number===10);

// Test6 
console.log('Is number not equal to 10 Or equal to 10? I predict True');
console.log(number!=10 || number===10);

// Test7 
console.log('Is number Greater than 1 and 5? I predict True');
console.log(number>1 && number>5);

// Test8 
console.log('Is number Greater than 1 or 5? I predict True');
console.log(number>1 || number>5);

// Test 9
console.log('Is number divided by 3 equal to 2? I predict False')
console.log(number / 3 === 2);

// Test 10:
console.log('Is number multiplied by 5 equal to 35? I predict False');
console.log(number * 5 === 35);

let names = "Ali";

// Test 11:
console.log('Is names to ali? I predict True');
console.log(names.toLowerCase()==="ali");

// Test 12:
console.log('Is names to Ali? I predict True');
console.log(names.toString()===names);


// Array
let fruits: string[] = ['Apple', 'Banana', 'Orange'];

// Use type assertion to inform TypeScript about the includes method
console.log('Check if Grapefruit is present or not: ' + (fruits as any).includes('Grapefruit'));

// Use type assertion to inform TypeScript about the includes method
console.log('Check if Apple is present or not: ' + (fruits as any).includes('Apple'));



// Test 13: Equality test with strings
let str1 = "Hello";
let str2 = "hello";
console.log(`Are ${str1} and ${str2} equal? I predict False`);
console.log(str1 === str2);

// Test 14: Inequality test with strings
let country1 = "USA";
let country2 = "Canada";
console.log(`Are ${country1} and ${country2} not equal? I predict True`);
console.log(country1 !== country2);

// Test 15: Lowercase test with strings
let word = "Programming";
console.log(`Is the word "${word}" in lowercase equal to "programming"? I predict True`);
console.log(word.toLowerCase() === "programming");

// Test 16: Numerical test - greater than
let num1 = 15;
let num2 = 10;
console.log(`Is ${num1} greater than ${num2}? I predict True`);
console.log(num1 > num2);

// Test 17: Numerical test - less than or equal to
let age1 = 25;
let age2 = 30;
console.log(`Is ${age1} less than or equal to ${age2}? I predict True`);
console.log(age1 <= age2);

// Test 18: Logical AND operator
let x = 5;
let y = 8;
console.log(`Is ${x} greater than 3 and ${y} less than 10? I predict True`);
console.log(x > 3 && y < 10);

// Test 19: Logical OR operator
let z = 2;
console.log(`Is ${x} greater than 5 or ${z} equal to 2? I predict True`);
console.log(x > 5 || z === 2);

// Test 20: Array membership test
let animals = ['dog', 'cat', 'rabbit'];
let animalToCheck = 'cat';
console.log(`Is ${animalToCheck} in the array? I predict True`);
console.log((animals as any).includes(animalToCheck));

// Test 21: Array non-membership test
let fruitToCheck = 'Grapes';
console.log(`Is ${fruitToCheck} not in the array? I predict True`);
console.log(!(fruits as any).includes(fruitToCheck));
