///business logic

var smallPrice = 8;
var price = 10;
var largePrice = 12;

function Pizza(main, extra, size) {
  this.main = main;
  this.extra = extra;
  this.size = size;
}

Pizza.prototype.price = function() {
  // debugger;
  if(this.size === "small") {
    var pizzaPrice = smallPrice;
  } else if(this.size ==="large") {
    var pizzaPrice = largePrice;
  } else {
     var pizzaPrice = price;
   }

  return pizzaPrice;
}


//user interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

  var inputtedMain = $("#mainToppingDropdown").val();
  var inputtedExtra = $("#extraToppingDropdown").val();
  var inputtedSize = $("input[name=size]:checked").val();

  var newPizza = new Pizza (inputtedMain,inputtedExtra,inputtedSize);
  var finalPrice = newPizza.price();
  $("ul#show-price").append("<li><span class = 'yummypizza'>" + newPizza.main + "<span></li>");

  var result = newPizza.price();
  $("#show-price").show();
  $("#show-price").append("Your price is: " + "$" + result);
  $(".yummypizza").last().click(function() {
    $("show-price").fadeIn();
    $("show-price h2").text(newPizza.main);
    $(".type-of-pizza").text(newPizza.main);
    $(".extraToppings").text(newPizza.extra);
    $("sizeOfPizza").text(newPizza.size);
    $("price").text(pizzaPrice);
    });
  });
});
