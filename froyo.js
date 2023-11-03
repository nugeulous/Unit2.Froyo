// Prompt the user to enter a list of comma-separated froyo flavors.
const userOrder = prompt(
        "Please enter the flavors of froyo you would like to order separated by commas.",
        "chocolate,vanilla,vanilla,banana"
    );
  
// Split the user inputed strungs into an array of those strings.
const orderArray = userOrder.split(",");

// write a function that iterates over the order array 
// and either adds or updates the orderTotals object
function tallyOrder() {
    // create an empty object to store the customer order
    let newOrder = {};
    for (let i = 0; i < orderArray.length; i++) {
        let key = orderArray[i];
        if (key in newOrder) {
            newOrder[key] += 1;
        } else {
            newOrder[key] = 1;
        }
    }
    return newOrder;
}
console.table(tallyOrder(orderArray));

// let orderTotals = tallyOrder(orderArray);
// let write = document.write(JSON.stringify({orderTotals}));
