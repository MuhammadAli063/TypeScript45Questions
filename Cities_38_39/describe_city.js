// function accept name of city & country
function describe_city(name_of_city, country) {
    if (name_of_city === void 0) { name_of_city = 'Karachi'; }
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(name_of_city, " is in ").concat(country));
}
describe_city();
describe_city('Islamabad');
describe_city('Quetta');
describe_city('Lahore');
describe_city('Tehran', 'Iran');
// city_country function
function city_country(name_of_a_city, country) {
    if (name_of_a_city === void 0) { name_of_a_city = 'Lahore'; }
    if (country === void 0) { country = 'Pakistan'; }
    console.log("\"".concat(name_of_a_city, ", ").concat(country, "\""));
}
city_country();
city_country('Washington', 'United States');
city_country('Ankara', 'Turkey');
city_country('Kabul', 'Afghanistan');
