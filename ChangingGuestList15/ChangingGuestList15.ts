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



