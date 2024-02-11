"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// Multiple show btns are present
const btnsOpenModal = document.querySelectorAll(".show-modal");
// remove the hidden part
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// when we click the cross add the hidden part
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // we can also use esc keyword to close the pop up
  // e is keyboardevent object
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
