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
  if(this.size === "Small") {
    var pizzaPrice = smallPrice;
  } else if(this.size ==="Large") {
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
  $("ul#show-price").append("<li><span class = 'yummypizza'>" + "View Details" + "<span></li>");

  var result = newPizza.price();
  $("#show-price").show();
  $(".header1").text(newPizza.main);
 $("#show-price").append("Your price is: " + "$" + result);
  $(".yummypizza").last().click(function() {
    $("show-price").fadeIn();
    $(".type-of-pizza").text(newPizza.main);
    $(".extraToppings").text(newPizza.extra);
    $(".sizeOfPizza").text(newPizza.size);
    $(".price").text(finalPrice);
    });
  });
});
