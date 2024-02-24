// Favorite Fruit

let FavoriteFruit : string [] = ['apple','mango','banana'];

// if else conditions
if((FavoriteFruit as any).includes('apple')){
    console.log(`My Fvrt Fruit is : ${FavoriteFruit[0]}`);
}
if((FavoriteFruit as any).includes('mango')){
    console.log(`My Fvrt Fruit is : ${FavoriteFruit[1]}`);
}
if((FavoriteFruit as any).includes('banana')){
    console.log(`My Fvrt Fruit is : ${FavoriteFruit[2]}`);
}

// Array of favorite fruits
let favorite_fruits: string[] = ['apple', 'mango', 'banana'];

// Check for specific fruits using if statements
if ((favorite_fruits as any).includes('apple')) {
    console.log('You really like apples!');
}

if ((favorite_fruits as any).includes('mango')) {
    console.log('Mangoes are one of your favorites!');
}

if ((favorite_fruits as any).includes('banana')) {
    console.log('I really like bananas!');
}

if ((favorite_fruits as any).includes('strawberry')) {
    console.log('Strawberries are delicious!');
}   

if ((favorite_fruits as any).includes('kiwi')) {
    console.log('Kiwi is among your top choices!');
}
