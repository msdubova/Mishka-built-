  var identificator  = document.querySelector(".page-header__container");
  var navToggle = document.querySelector(".page-header__toggle");

  identificator.classList.remove("page-header__container--no-js");

  navToggle.addEventListener("click", function() {
    if (identificator.classList.contains("page-header__container--closed")) {
      identificator.classList.remove("page-header__container--closed");
      identificator.classList.add("page-header__container--opened");
    } else {
      identificator.classList.add("page-header__container--closed");
      identificator.classList.remove("page-header__container--opened");
    }
  });

var popup = document.querySelector(".modal-overlay");
var formField = popup.querySelector("[name=size]");
var openPopup = Array.from(document.querySelectorAll(".js-button-modal"));

for (var i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    formField.focus();
  });
}

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});


popup.addEventListener("submit", function(evt){
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
  }
});
