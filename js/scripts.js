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


