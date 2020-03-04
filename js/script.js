var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var initials = popup.querySelector("[name=initials]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("initials");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    initials.value = storage;
    email.focus();
  } else {
    initials.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!initials.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя и e-mail");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("initials", initials.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});


var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".map-popap");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});


// var slider = document.querySelector(".slide-1");
// var slideButton = document.querySelector("showcase-slider-controls-l");
//
// slideButton.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     slider.classList.remove("2");
//
// });






