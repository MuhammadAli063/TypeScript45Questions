// animalss
var animalss = ['Dog', 'Cat', 'Rabbit'];
// Print out the name of each animal
console.log('List of animalss:');
for (var _i = 0, animalss_1 = animalss; _i < animalss_1.length; _i++) {
    var animal = animalss_1[_i];
    console.log(animal);
}
// Print a statement about each animal
console.log('\nStatements about each animal:');
for (var _a = 0, animalss_2 = animalss; _a < animalss_2.length; _a++) {
    var animal = animalss_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a line stating what these animalss have in common
console.log('\nWhat these animalss have in common:');
console.log('Any of these animalss would make a great pet!');
