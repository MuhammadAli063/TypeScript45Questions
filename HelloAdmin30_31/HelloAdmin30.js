// Users 
var usernames = ['admin', 'user', 'client', 'employee', 'guest'];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop for each user's greeting, also check if admin for a special greeting 
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hi, ".concat(usernames[i], "! Welcome to my Website"));
        }
        else {
            console.log("Hello ".concat(usernames[i], "!"));
        }
    }
}
else {
    console.log('We need to find some users!');
}
// Remove all usernames from the array
usernames = [];
// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
