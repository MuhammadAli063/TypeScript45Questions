// Checking Usernames
// current_users
var current_users = ['ali', 'Sharukh', 'Umair', 'Hassan', 'Waqar', 'Zohaib'];
// new_users
var new_users = ['Ali', 'zohaib', 'sharukh', 'Ali hassan', 'kano bhai'];
var _loop_1 = function (i) {
    // Check if the lowercase version of the new username exists in current_users
    if (current_users.some(function (user) { return user.toLowerCase() === new_users[i].toLowerCase(); })) {
        console.log(new_users[i] + ' You need to enter a new username');
    }
    else {
        console.log(new_users[i] + ' The username is available');
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
