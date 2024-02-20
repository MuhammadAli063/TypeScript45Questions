// Store a person's name in a variable
let personName: string = "John Doe";

// Print in lowercase
console.log(`Lowercase: ${personName.toLowerCase()}`);

// Print in uppercase
console.log(`Uppercase: ${personName.toUpperCase()}`);

// Print in Title 
console.log(`Titlecase: ${titleCase(personName)}`);

// Title case function
function titleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
