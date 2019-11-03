var link = document.querySelector(".search-hotel__btn");
var popup = document.querySelector(".search__form");

var date = popup.querySelector(".search__input");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    } else {
    popup.classList.add("modal-show");
    }
});

popup.addEventListener("submit", function (evt) {
    if (!date.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

