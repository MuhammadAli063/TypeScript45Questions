// function accept name of city & country
function describe_city(name_of_city:string = 'Karachi' , country:string = 'Pakistan'){
    console.log(`${name_of_city} is in ${country}`);
}

describe_city();
describe_city('Islamabad');
describe_city('Quetta');
describe_city('Lahore');
describe_city('Tehran','Iran');


// city_country function
function city_country(name_of_a_city:string = 'Lahore' , country:string = 'Pakistan'){
    console.log(`"${name_of_a_city}, ${country}"`);
}

city_country();
city_country('Washington','United States');
city_country('Ankara','Turkey');
city_country('Kabul','Afghanistan');