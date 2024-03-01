// animalss
let animalss: string[] = ['Dog', 'Cat', 'Rabbit'];

// Print out the name of each animal
console.log('List of animalss:');
for (let animal of animalss) {
    console.log(animal);
}

// Print a statement about each animal
console.log('\nStatements about each animal:');
for (let animal of animalss) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a line stating what these animalss have in common
console.log('\nWhat these animalss have in common:');
console.log('Any of these animalss would make a great pet!');
