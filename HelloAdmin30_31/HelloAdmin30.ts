// Users 
let usernames: string[] = ['admin', 'user', 'client', 'employee', 'guest'];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop for each user's greeting, also check if admin for a special greeting 
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log(`Hi, ${usernames[i]}! Welcome to my Website`);
        } else {
            console.log(`Hello ${usernames[i]}!`);
        }
    }
} else {
    console.log('We need to find some users!');
}

// Remove all usernames from the array
usernames = [];

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
