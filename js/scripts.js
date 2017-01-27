// //business-logic
function Pizza(size, total) {
  this.pizzaSize = size;
  this.toppings = 0;
  this.totalPrice = total;
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
    order.pizzaSize = parseInt($('input[name="size"]:checked', '.selections-made').val());
    // toppings
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingsChosen = parseInt($(this).val());
      order.toppings++;
    });


    $("#final-pizza-price").text(totalPrice);
  });
});
