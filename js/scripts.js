function Pizza(size, toppings =[]) {
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

Pizza.prototype.addFinalPrice = function () {
  this.totalPrice = this.sizePrice + this.toppingPrice;
  return this.totalPrice;
};

//UI
function handleSubmission (event) {
  event.preventDefault();
  // in this section we get the value for each form input
  const sizeOfPizza = document.querySelector("input[name=size-checked]:checked").value;
  const toppingsSelectedArray = []
  const toppingOnPizza = document.querySelectorAll("input[name=topping-checked]:checked");
  for (let i = 0; i < toppingOnPizza.length; i++) {
    toppingsSelectedArray.push(toppingOnPizza[i].value)
  }
  let newPizza = new Pizza (sizeOfPizza, toppingsSelectedArray);

  newPizza.addSizePrice();
  newPizza.addToppingPrice();
  newPizza.addFinalPrice();

  // then we set variables to the values we got from the form
  document.querySelector("span#size-display").innerText = sizeOfPizza;
  document.querySelector("span#topping-display").innerText = newPizza.toppings;
document.querySelector("span#price-display").innerText = newPizza.totalPrice;
  document.querySelector("div#display-pizza").removeAttribute("class");
}
window.addEventListener("load",function() {
  document.querySelector("form#pizza-form").addEventListener("submit",handleSubmission)
 

});