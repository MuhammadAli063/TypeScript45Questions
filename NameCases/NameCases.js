// Store a person's name in a variable
var personName = "John Doe";
// Print in lowercase
console.log("Lowercase: ".concat(personName.toLowerCase()));
// Print in uppercase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// Convert to title case and print
console.log("Titlecase: ".concat(titleCase(personName)));
// Title case function
function titleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
