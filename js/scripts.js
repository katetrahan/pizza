///business logic
var smallPrice = 8;
var price = 10;
var largePrice = 12;
var extraTopping = 11;


function Pizza(main, extra, more, size) {
  this.main = main;
  this.extra = extra;
  this.more = more;
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

  if(this.more === "Pineapple") {
    var pizzaPrice = extraTopping
  } else if (this.more === "No"){
    var pizzaPrice = pizzaPrice
  }

  return pizzaPrice;
}


//user interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();

  var inputtedMain = $("#mainToppingDropdown").val();
  var inputtedExtra = $("#extraToppingDropdown").val();
  var inputtedMore = $("moreToppingDropdown").val();
  var inputtedSize = $("input[name=size]:checked").val();

  var newPizza = new Pizza (inputtedMain,inputtedExtra, inputtedMore,inputtedSize);
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
    $(".moreToppings").text(newPizza.more);
    $(".sizeOfPizza").text(newPizza.size);
    $(".price").text(finalPrice);
    });
  });
});
