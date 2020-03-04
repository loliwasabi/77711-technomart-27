var addcartLinks = document.querySelectorAll(".buy");

var addcartPopup = document.querySelector(".modal-add-cart");
var addcartClose = addcartPopup.querySelector(".modal-close");
var cartCount = 0;
var cartColor = document.querySelector(".cart");

addcartLinks.forEach(function (element) {
  element.addEventListener("click", function (evt) {
    cartCount += 1;
    document.getElementById("cart-count").textContent = cartCount;
    evt.preventDefault();
    addcartPopup.classList.add("modal-show");
    cartColor.classList.add("cart-color");
  })
});

addcartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addcartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    evt.preventDefault();
    if (addcartPopup.classList.contains("modal-show")) {
      addcartPopup.classList.remove("modal-show");
    }
  }
});