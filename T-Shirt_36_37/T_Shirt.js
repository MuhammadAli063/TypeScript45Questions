// make_shirt function with default values
function make_shirt(size, text) {
    if (size === void 0) { size = 10; }
    if (text === void 0) { text = 'I love TypeScript'; }
    console.log("The size of the shirt is ".concat(size, " & the text message on the shirt is \"").concat(text, "\""));
}
// Example calls
make_shirt(5, 'Make your dream happen'); // Custom size and text
make_shirt(); // Default size (large) and default text
make_shirt(7); // Custom size and default text
