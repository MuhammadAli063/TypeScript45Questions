// Function for ordering sandwiches
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("Items:");
        // Print each selected item
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
        console.log("Sandwich is ready!");
    }
    console.log("-----------------------");
}
// Call the function with different numbers of arguments
orderSandwich('Cheese', 'Tomato', 'Lettuce');
orderSandwich('Turkey', 'Bacon', 'Avocado', 'Swiss Cheese');
orderSandwich(); // No items selected
