// Ordinal Numbers
// 1 to 9 array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var i = 0; i < numbers.length; i++) {
    var ordinal = void 0;
    // Use an if-else chain to determine the proper ordinal ending
    if (i + 1 === 1) {
        ordinal = "st";
    }
    else if (i + 1 === 2) {
        ordinal = "nd";
    }
    else if (i + 1 === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    // Print the result
    console.log("".concat(i + 1).concat(ordinal));
}
