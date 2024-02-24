// Guest List 
 let guest_List: string[] = ['Ali', 'Umair', 'Hassan', 'Waqar'];

// Guest I heared he is not comming
 let SomeoneInvited_MyGuest:string | undefined = guest_List.pop();
 console.log(`Unfortunately, ${SomeoneInvited_MyGuest}! can't make it to the dinner.`)

 // for loop for each guest message they are comming
for (let j = 0; j < guest_List.length; j++) {
    console.log(`Hey, My Guest ${guest_List[j]}! Are you free tonight for dinner? Join me at 9 PM for dinner!`);
}

//  replace guest who can't join dinner party
 let newperson:string = 'Zohaib Awan';
 guest_List.push(newperson);

 for(let k=0; k<guest_List.length; k++){
    console.log(`Dear ${guest_List[k]} you are invited to dinner. Join me for a wonderful evening!`)
 }

//  Question No:# 16  =>   More Guests
//  Bigger Dinner Table 
console.log(`Hi Guys! I am infoeming you I found a Bigger Dinner table for you`);


// Add new guest beginning of array 
let newGuest:string = 'Shahid';
guest_List.unshift(newGuest);
console.log("Add new guest beginning of array : " + guest_List);

// Add one new guest to the middle of your array
let middle_Man_Name:string = 'Mubashir';
// Middle Name
let middle_Name:number = Math.floor(guest_List.length/2);
// Adding middle name to an array
guest_List.splice(middle_Name, 0, middle_Man_Name)
console.log(`New guest Added at the middle: ${guest_List}`)

// one new guest to the end of list 
let newGuest_Name:string = 'Shakoor';
guest_List.push(newGuest);
console.log(`New guest Added at the end: ${guest_List}`)

// Last New Invitation for each  
for(let k=0; k<guest_List.length; k++){
    console.log(`Hi my New Guys! ${guest_List[k]} I am inviting you for Dinner please join me at 8PM Thnkx!`);
}

// Q#17 Shrinking Guest List:
console.log(`Hey Guys My new Table not Arrived yet.I am really sorry I want to invite only two Guests tonight for dinner`)
// Remove guests from your list one at a time until only two names remai
while(guest_List.length>2){
    let guest_remove_names:string | undefined = guest_List.pop()
    console.log(`${guest_remove_names} I sorry you can’t invite them to dinner`);
}
// Remaining two guests are still invited
    for(let l=0; l<guest_List.length; l++){
        console.log(`Hi ${guest_List[l]} you are still invited!`);
    }
// Remove last two more guests
guest_List.pop();
guest_List.pop();

console.log(`End of Program's List : ${guest_List.length}`);

export let final_guest: string[] = [...guest_List];
console.log(final_guest)