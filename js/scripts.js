//business-logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.chooseSize = function() {

};

Pizza.prototype.chooseTopping = function() {

};

Pizza.prototype.calculatePrice = function() {

};


//front-end logic
$(document).ready(function() {
  $("#selections-made").submit(function(event) {
    event.preventDefault();

    var sizeChoice = $('input[name="size"]:checked', '.selections-made').val();

    $("#list-pizza-selections").text(sizeChoice);
  });
});
