# _Pizza A LA CARTE_

#### By _**Anahi Ruiz Robles**_

#### _Project for pizza parlor choose your own toppings and size._

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_This webpage contains project for pizza parlor, a website for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _No known bugs_

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _12/10/2022_ _Anahi Ruiz Robles_

```

Describe: Pizza()

Test: It should return pizza object with toppings and size.
Code: let myPizza = new Pizza("medium",["bacon", "chicken", "onion"]);
Expected Output: myPizza Pizza {size: 'medium', toppings: Array(3),toppings
(3) ['bacon', 'chicken', 'onion']

Test: It should add pizza price based on size
Code: let myPizza = new Pizza("medium",["bacon", "chicken", "onion"]);
myPizza.addSizePrice();
Expected Output: 15

Test: It should add pizza toppings price
Code: let myPizza = new Pizza("medium",["meat-balls", "piña", "quesito"]);
myPizza.addToppingPrice();
Expected Output: 15

Test: It should return final pizza price
Code:  let myPizza = new Pizza("medium",["meat-balls", "piña", "quesito"]);
myPizza.addFinalPrice();
Expected Output: 30
```
