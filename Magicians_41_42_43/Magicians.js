var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// show_magicians function
function show_magicians(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Printing names of magicians
show_magicians(magician_names);
// make_great function
function make_great(names) {
    var great_magicians = [];
    for (var j = 0; j < names.length; j++) {
        great_magicians[j] = "The Great ".concat(names[j]);
    }
    return great_magicians;
}
// Create a copy of the array and modify the copy
var great_magicians_array = make_great(__spreadArray([], magician_names, true));
// Show the original magicians
console.log("\nOriginal Magicians:");
show_magicians(magician_names);
// Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians_array);
