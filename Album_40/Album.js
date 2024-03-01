// function of make_album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Atif Aslam', 'Jewey Pakistan');
var album2 = make_album('John', 'Sadha Shairy', 8);
var album3 = make_album('Meer', 'MuQalma', 12);
console.log(album1);
console.log(album2);
console.log(album3);
