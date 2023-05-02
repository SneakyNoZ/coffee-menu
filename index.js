// Import the coffee menu data

const coffeeMenu = require("./coffee_data");

// Use map() to create a new array with just the drink names

const drinkNames = coffeeMenu.map(drink => drink.name);
console.log(drinkNames);

// Use filter() to create a new array with drinks that cost 5 or less

const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);

// Use filter() to create a new array with drinks that have an even price 

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.table(evenPricedDrinks);

// Use reduce() to create a new array with total if you were to order only one drink

const total = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(`The total cost of one of each drink is: $${total}.`);

// Use filter() to create a new array with all the drinks that are seasonal

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.table(seasonalDrinks);

// Use filter() to create a new array with all the seasonal drinks with words like "with imported beans"

const seasonalDrinksWithImportedBeans = coffeeMenu
  .filter(drink => drink.seasonal)
  .map(drink => {
    return {
      ...drink,
      name: `${drink.name} with imported beans`
    }
  })

console.table(seasonalDrinksWithImportedBeans)