// person’s age
var age = 2;
// If the person is less than 2 years old
if (age < 2) {
    console.log('The person is a baby');
}
else if (age >= 2 && age < 4) {
    console.log('The person is a toddler');
}
else if (age >= 4 && age < 13) {
    console.log('The person is a kid');
}
else if (age >= 13 && age < 20) {
    console.log('The person is a teenager');
}
else if (age >= 20 && age < 65) {
    console.log('The person is an adult');
}
else {
    console.log('The person is an elder');
}
