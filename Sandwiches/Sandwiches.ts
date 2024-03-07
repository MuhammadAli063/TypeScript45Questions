// Function for ordering sandwiches
function orderSandwich(...items: string[]) {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("Items:");

        // Print each selected item
        for (let item of items) {
            console.log(`- ${item}`);
        }

        console.log("Sandwich is ready!");
    }
    console.log("-----------------------");
}

// Call the function with different numbers of arguments
orderSandwich('Cheese', 'Tomato', 'Lettuce');
orderSandwich('Turkey', 'Bacon', 'Avocado', 'Swiss Cheese');
orderSandwich();  // No items selected
