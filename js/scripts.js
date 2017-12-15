///business logic
var smallPrice = 8; // variables of different prices
var price = 10;
var largePrice = 12;
var extraTopping = 2;


function Pizza(main, extra, more, size) { //constructor
  this.main = main;
  this.extra = extra;
  this.more = more;
  this.size = size;
}

Pizza.prototype.price = function() { //prototype
  if(this.more === "Yes" &&  this.size === "Small"){
    var pizzaPrice = smallPrice + extraTopping;
  } else if(this.more === "Yes" && this.size === "Medium"){
    var pizzaPrice = price + extraTopping;
  } else if(this.more === "Yes" && this.size === "Large"){
    var pizzaPrice = largePrice + extraTopping;
  } else if(this.more !== "Yes" && this.size === "Small"){
    var pizzaPrice = smallPrice;
  } else if(this.more !== "Yes" && this.size === "Medium"){
    var pizzaPrice = price;
  } else if(this.more !== "Yes" && this.size === "Large"){
    var pizzaPrice = largePrice;
  } else {

  } return pizzaPrice; // returns adjusted price


// Pizza.prototype.topper = function() { // prototype #2
//   if(this.more === "Pineapple") {
//     var pizzaPrice = extraTopping
//   } else if (this.more === "No"){
//     var pizzaPrice = pizzaPrice
//   }
}


//user interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    // debugger;

  var inputtedMain = $("#mainToppingDropdown").val();//takes input from user
  var inputtedExtra = $("#extraToppingDropdown").val();
  var inputtedMore = $("#moreToppingDropdown").val();
  var inputtedSize = $("input[name=size]:checked").val();

  var newPizza = new Pizza (inputtedMain,inputtedExtra, inputtedMore,inputtedSize);//instance
  var finalPrice = newPizza.price(); //calls from back end
  $("ul#show-price").append("<li><span class = 'yummypizza'>" + "View Details" + "<span></li>");

  var result = newPizza.price();
  $("#show-price").show();
  $(".header1").text(newPizza.main + " " +"Pizza");
 $("#show-price").append("Amount Due: " + "$" + result);
  $(".yummypizza").last().click(function() {
    $("#show-price").fadeIn();
    $(".type-of-pizza").text(newPizza.main);
    $(".extraToppings").text(newPizza.extra);
    $(".moreToppings").text(newPizza.more);
    $(".sizeOfPizza").text(newPizza.size);
    $(".price").text(finalPrice);
  });
  $("#newOrderButton").click(function() {
    $("#show-price").hide();
  }
)
  });
});
