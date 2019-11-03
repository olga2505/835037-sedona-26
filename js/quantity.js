  var minusAdults = document.querySelector(".minus-adults");
  var plusAdults = document.querySelector(".plus-adults");

  var minusChildren = document.querySelector(".minus-children");
  var plusChildren = document.querySelector(".plus-children");

  var quantityAdults = document.querySelector(".quantity-adults");
  var quantityChildren = document.querySelector(".quantity-children");


 document.addEventListener("click", function (evt) {
  var target = evt.target;

  if(target.classList.contains("minus-adults") && quantityAdults.value >= 1) {
    quantityAdults.value = +quantityAdults.value - 1;
  }

  if(target.classList.contains("plus-adults") && quantityAdults.value <= 98) {
    quantityAdults.value = +quantityAdults.value + 1;
  }

  if(target.classList.contains("minus-children") && quantityChildren.value >= 1) {
    quantityChildren.value = +quantityChildren.value - 1;
  }

  if(target.classList.contains("plus-children") && quantityChildren.value <= 98 ) {
    quantityChildren.value = +quantityChildren.value + 1;
  }
})
