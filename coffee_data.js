// Create an array of coffee menu items

const coffeeMenu = [
    {
      name: "cappuccino",
      price: 8,
      seasonal: false,
    },
    {
      name: "espresso",
      price: 5,
      seasonal: false,
    },
    {
      name: "latte",
      price: 5,
      seasonal: false,
    },
    {
      name: "affogato",
      price: 9,
      seasonal: true,
    },
    {
      name: "macchiato",
      price: 6,
      seasonal: false,
    },
    {
      name: "americano",
      price: 7,
      seasonal: false,
    },
    {
      name: "iced coffee",
      price: 6,
      seasonal: false,
    },
    {
      name: "frappe",
      price: 8,
      seasonal: false,
    },
    {
      name: "cuban espresso",
      price: 10,
      seasonal: true,
    }
  ];

  // Use map() to convert price strings to numbers

  const menuWithPricesAsNumbers = coffeeMenu.map(drink => ({
    ...drink,
    price: Number(drink.price)
  }));

  // Export the updated menu

  module.exports = coffeeMenu;  