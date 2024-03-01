// function of make_album
function make_album(artist:string , title:string, tracks?:number){
    let album: {artist:string , title:string, tracks?:number} = {
        artist:artist,
        title:title,
    }

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
    
}

// 3 Albums
let album1 = make_album('Atif Aslam','Jewey Pakistan');
let album2 = make_album('John','Sadha Shairy',8);
let album3 = make_album('Meer','MuQalma',12);

// printing albums
console.log(album1);
console.log(album2);
console.log(album3);