//business-logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.chooseSize = function() {

};

Pizza.prototype.chooseTopping = function() {

};


//front-end logic
$(document).ready(function() {
  $("#selections-made").submit(function(event) {
    event.preventDefault();

  })
})
