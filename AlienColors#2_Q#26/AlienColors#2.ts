// alien color
let alien_colors:string = 'red';

// check alien color green if yess earned 5 poitns
if(alien_colors==='green'){
    console.log('The player just earned 5 points for shooting the alien');
}

// check alien’s color isn’t green if yess  just earned 10 points
if(alien_colors!='green'){
    console.log('The player just earned 10 points');
}

 alien_colors = 'red';

if (alien_colors === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting an alien of a different color.");
}
