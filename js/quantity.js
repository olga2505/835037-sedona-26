  var minusAdults = document.querySelector(".minus-adults");
  var plusAdults = document.querySelector(".plus-adults");

  var minusChildren = document.querySelector(".minus-children");
  var plusChildren = document.querySelector(".plus-children");

  var quantityAdults = document.querySelector(".quantity-adults");
  var quantityChildren = document.querySelector(".quantity-children");


 document.addEventListener("click", function (evt) {
  var target = evt.target;

  if(target.classList.contains("minus-adults")) {
    quantityAdults.innerHTML = +quantityAdults.innerHTML - 1;
  }

  if(target.classList.contains("plus-adults")) {
    quantityAdults.innerHTML = +quantityAdults.innerHTML + 1;
  }

  if(target.classList.contains("minus-children")) {
    quantityChildren.innerHTML = +quantityChildren.innerHTML - 1;
  }

  if(target.classList.contains("plus-children")) {
    quantityChildren.innerHTML = +quantityChildren.innerHTML + 1;
  }
})
