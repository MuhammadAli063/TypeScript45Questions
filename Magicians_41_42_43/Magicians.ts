// Array of magician names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// show_magicians function
function show_magicians(names: string[]) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

// make_great function
function make_great(names: string[]) {
    let great_magicians: string[] = [];
    for (let j = 0; j < names.length; j++) {
        great_magicians[j] = `The Great ${names[j]}`;
    }
    return great_magicians;
}

// Show original magicians
console.log("Original Magicians:");
show_magicians(magician_names);

//  Modify the array to make magicians great
make_great(magician_names);

// Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(magician_names);

//  Call make_great() with a copy of the array
let unchanged_magicians = make_great([...magician_names]);

// Show the original magicians
console.log("\nOriginal Magicians:");
show_magicians(magician_names);

// Show the modified magicians
console.log("\nGreat Magicians:");
show_magicians(unchanged_magicians);
