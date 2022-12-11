Describe: Pizza()

Test: It should return pizza object with toppings and size.
Code: let myPizza = new Pizza("medium",["bacon", "chicken", "onion"]);
Expected Output: myPizza Pizza {size: 'medium', toppings: Array(3),toppings
(3) ['bacon', 'chicken', 'onion']

Test: It should add pizza price based on size
Code: 
let myPizza = new Pizza("medium",["bacon", "chicken", "onion"]);
myPizza.addSizePrice();
Expected Output: 15

Test:
