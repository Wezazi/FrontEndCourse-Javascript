let price = prompt("Enter the price");

if (price.includes("$")){
    price = price.replace("$", "");
}

price = parseFloat(price); // I wasn't able to use it as a method: price.parseFloat() so i just used it as a function

let discount =  price / 10;
let newPrice = price - discount;
console.log(`Your new price is $${newPrice}`);