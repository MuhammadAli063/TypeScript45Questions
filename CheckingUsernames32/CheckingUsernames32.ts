// Checking Usernames

// current_users
let current_users: string[] = ['ali', 'Sharukh', 'Umair', 'Hassan', 'Waqar', 'Zohaib'];

// new_users
let new_users: string[] = ['Ali', 'zohaib', 'sharukh', 'Ali hassan', 'kano bhai'];

for (let i = 0; i < new_users.length; i++) {
    // Check if the lowercase version of the new username exists in current_users
    if (current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase())) {
        console.log(new_users[i] + ' You need to enter a new username');
    } else {
        console.log(new_users[i] + ' The username is available');
    }
}
