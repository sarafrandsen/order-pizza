// //business-logic
function Pizza() {
  this.pizzaSize = 0;
  this.toppings =0;
  this.totalPrice = 0;
};

var pizzaOrder = new Pizza();

Pizza.prototype.calculatePrice = function() {
  this.totalPrice = this.pizzaSize + this.toppings;
  return this.totalPrice;
};

//front-end logic
$(document).ready(function() {
  $("form#selections-made").submit(function(event) {
    event.preventDefault();
    // size
    pizzaOrder.pizzaSize = parseInt($('input[name="size"]:checked', '#selections-made').val());
    // toppings
    pizzaOrder.toppings = 0;
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingsChosen = parseInt($(this).val());
      pizzaOrder.toppings += toppingsChosen;
    });

    if (isNaN(pizzaOrder.pizzaSize)) {
      alert("Please select a pizza size.");
      return;
    }

    pizzaOrder.calculatePrice();

    $("#final-pizza-price").text(pizzaOrder.totalPrice)
    $(".display-cost").show();
    $(".display-filler").hide();
  });
});
