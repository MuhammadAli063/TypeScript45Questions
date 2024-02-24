"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ChangingGuestList15_16_17_1 = require("../ChangingGuestList15_16_17/ChangingGuestList15_16_17");
// Original array of places to visit
var placesToVisit = ["Tokyo", "Paris", "London", "Thailand", "Switzerland"];
// 1. Print the array in its original order
console.log("Original Order:", placesToVisit);
// 2. Print the array in alphabetical order without modifying the actual list
var alphabeticalOrder = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// 3. Show that the array is still in its original order
console.log("Original Order after Alphabetical Sorting:", placesToVisit);
// 4. Print the array in reverse alphabetical order without changing the order of the original list
var reverseAlphabeticalOrder = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// 5. Show that the array is still in its original order
console.log("Original Order after Reverse Alphabetical Sorting:", placesToVisit);
// 6. Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// 7. Reverse the order of the list again
placesToVisit.reverse();
console.log("Reversed Again to Original Order:", placesToVisit);
// 8. Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
console.log("Sorted Order (Alphabetical):", placesToVisit);
// 9. Sort to change your array so it’s stored in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted Order (Reverse Alphabetical):", placesToVisit);
// Dinner Guests
console.log("Dinner Guests");
console.log(ChangingGuestList15_16_17_1.final_guest);
console.log("Number of Guests Finally : " + ChangingGuestList15_16_17_1.final_guest.length);
