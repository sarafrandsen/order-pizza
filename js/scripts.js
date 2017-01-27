// //business-logic
// function Pizza(size, toppings, price) {
//   this.pizzaSize = size;
//   this.toppings = 0;
//   this.price = 0;
// };
//
// Pizza.prototype.calculatePrice = function() {
//   array.forEach(function() {
//     this.pizzaSize += this.toppings[]
//   };
// };
//

//front-end logic
$(document).ready(function() {
  $("#selections-made").submit(function(event) {
    event.preventDefault();

    var sizeChoice = parseInt($('input[name="size"]:checked', '#selections-made').val());
    // var toppingChoice = 0;

    var toppingInput = parseInt($("input:checkbox[name=topping]:checked", "#selections-made").length);
    if(toppingInput > 0) {
      return toppingInput * 2;
    } else {
      return 0;
    };
    console.log(toppingInput);


    // var pizzaPrice = new Pizza(sizeChoice);

    $("#final-pizza-size").text(sizeChoice);
    $("#final-pizza-topping").text(toppingInput);
  });
});
