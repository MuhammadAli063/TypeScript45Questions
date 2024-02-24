// List of countries
var countries = ["USA", "Canada", "Germany", "Japan", "Australia"];
// Country objects
var usa = { name: "USA", capital: "Washington D.C.", population: 331002651, language: "English" };
var canada = { name: "Canada", capital: "Ottawa", population: 37742154, language: "English, French" };
var germany = { name: "Germany", capital: "Berlin", population: 83149300, language: "German" };
var japan = { name: "Japan", capital: "Tokyo", population: 126476461, language: "Japanese" };
var australia = { name: "Australia", capital: "Canberra", population: 25499884, language: "English" };
// Correct the error 
if (usa[4]) {
    console.log(usa[4] + ' Have an error');
}
else {
    console.log('No any error');
}
