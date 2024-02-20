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
