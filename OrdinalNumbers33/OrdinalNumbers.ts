// Ordinal Numbers

// 1 to 9 array
let numbers:number[] = [1,2,3,4,5,6,7,8,9];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let ordinal: string;

    // Use an if-else chain to determine the proper ordinal ending
    if (i + 1 === 1) {
        ordinal = "st";
    } else if (i + 1 === 2) {
        ordinal = "nd";
    } else if (i + 1 === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    // Print the result
    console.log(`${i + 1}${ordinal}`);
}