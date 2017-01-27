// //business-logic
function Pizza() {
  this.pizzaSize = 0;
  this.toppings = 0;
  this.totalPrice = 0;
};

var placeOrder = new Pizza();

Pizza.prototype.calculatePrice = function() {
  return this.pizzaSize += this.toppings;
};

//front-end logic
$(document).ready(function() {
  $("form#selections-made").submit(function(event) {
    event.preventDefault();
    // size
    placeOrder.pizzaSize = parseInt($('input[name="size"]:checked', '.selections-made').val());
    // toppings
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingsChosen = parseInt($(this).val());
      placeOrder.toppings++;
    });


    $("#final-pizza-price").text(placeOrder.calculatePrice);
  });
});
