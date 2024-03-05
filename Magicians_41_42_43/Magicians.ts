// Array of magician names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// show_magicians function
function show_magicians(names: string[]) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// Printing names of magicians
show_magicians(magician_names);

// make_great function
function make_great(names: string[]) {
    let great_magicians: string[] = [];
    for (let j = 0; j < names.length; j++) {
        great_magicians[j] = `The Great ${names[j]}`;
    }
    return great_magicians;
}

// Create a copy of the array and modify the copy
let great_magicians_array = make_great([...magician_names]);

// Show the original magicians
console.log("\nOriginal Magicians:");
show_magicians(magician_names);

// Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians_array);
