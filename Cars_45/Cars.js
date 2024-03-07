// Car information function
function carInfo(manufacturer, modelName, options) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add optional information
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
// Example usage
var myCar = carInfo('Toyota', 'Camry', { color: 'Blue', features: ['Sunroof', 'Navigation'] });
// Print the object
console.log(myCar);
