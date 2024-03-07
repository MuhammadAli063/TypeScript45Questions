// Car information function
function carInfo(manufacturer: string, modelName: string, options: { [key: string]: any }): { manufacturer: string, modelName: string, [key: string]: any } {
    let car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Add optional information
    for (let key in options) {
        car[key] = options[key];
    }

    return car;
}

// Example usage
let myCar = carInfo('Toyota', 'Camry', { color: 'Blue', features: ['Sunroof', 'Navigation'] });

// Print the object
console.log(myCar);
