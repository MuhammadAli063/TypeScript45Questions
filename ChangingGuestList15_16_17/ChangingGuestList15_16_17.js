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
exports.final_guest = void 0;
// Guest List 
var guest_List = ['Ali', 'Umair', 'Hassan', 'Waqar'];
// Guest I heared he is not comming
var SomeoneInvited_MyGuest = guest_List.pop();
console.log("Unfortunately, ".concat(SomeoneInvited_MyGuest, "! can't make it to the dinner."));
// for loop for each guest message they are comming
for (var j = 0; j < guest_List.length; j++) {
    console.log("Hey, My Guest ".concat(guest_List[j], "! Are you free tonight for dinner? Join me at 9 PM for dinner!"));
}
//  replace guest who can't join dinner party
var newperson = 'Zohaib Awan';
guest_List.push(newperson);
for (var k = 0; k < guest_List.length; k++) {
    console.log("Dear ".concat(guest_List[k], " you are invited to dinner. Join me for a wonderful evening!"));
}
//  Question No:# 16  =>   More Guests
//  Bigger Dinner Table 
console.log("Hi Guys! I am infoeming you I found a Bigger Dinner table for you");
// Add new guest beginning of array 
var newGuest = 'Shahid';
guest_List.unshift(newGuest);
console.log("Add new guest beginning of array : " + guest_List);
// Add one new guest to the middle of your array
var middle_Man_Name = 'Mubashir';
// Middle Name
var middle_Name = Math.floor(guest_List.length / 2);
// Adding middle name to an array
guest_List.splice(middle_Name, 0, middle_Man_Name);
console.log("New guest Added at the middle: ".concat(guest_List));
// one new guest to the end of list 
var newGuest_Name = 'Shakoor';
guest_List.push(newGuest);
console.log("New guest Added at the end: ".concat(guest_List));
// Last New Invitation for each  
for (var k = 0; k < guest_List.length; k++) {
    console.log("Hi my New Guys! ".concat(guest_List[k], " I am inviting you for Dinner please join me at 8PM Thnkx!"));
}
// Q#17 Shrinking Guest List:
console.log("Hey Guys My new Table not Arrived yet.I am really sorry I want to invite only two Guests tonight for dinner");
// Remove guests from your list one at a time until only two names remai
while (guest_List.length > 2) {
    var guest_remove_names = guest_List.pop();
    console.log("".concat(guest_remove_names, " I sorry you can\u2019t invite them to dinner"));
}
// Remaining two guests are still invited
for (var l = 0; l < guest_List.length; l++) {
    console.log("Hi ".concat(guest_List[l], " you are still invited!"));
}
// Remove last two more guests
guest_List.pop();
guest_List.pop();
console.log("End of Program's List : ".concat(guest_List.length));
exports.final_guest = __spreadArray([], guest_List, true);
console.log(exports.final_guest);
