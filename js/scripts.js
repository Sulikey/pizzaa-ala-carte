function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.sizePrice = 0;
  this.toppingPrice = 0;
  this.totalPrice = 0;
}
Pizza.prototype.addSizePrice = function () {
  let price = 0;
  if (this.size === "small") {
    price = 10.00;
  } else if (this.size === "medium") {
    price = 15.00;
  } else if (this.size === "large") {
    price = 20.00;
  }
  this.sizePrice = price
  return this.sizePrice;
};

Pizza.prototype.addToppingPrice = function () {
  let price = 0;
  if (this.toppings.includes("meat-balls")) {
    price += 5;
  } if (this.toppings.includes("green-eggs-and-ham")) {
    price += 5; 
  } if (this.toppings.includes("spicy-chorizo")) {
    price += 5;
  } if (this.toppings.includes("gummy-bears")) {
    price += 5;
  } if (this.toppings.includes("piña")) {
    price += 5;
  } if (this.toppings.includes("quesito")) {
    price += 5;
  } if (this.toppings.includes("nutella-con-banana")) {
  price += 5;
  }
  this.toppingPrice = price;
  return this.toppingPrice;
};

    


