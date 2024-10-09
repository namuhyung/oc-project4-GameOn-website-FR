function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// START OWN CODE

// get cross button
let closeCross = document.querySelector(".close");


// fermer la popup
function closeModal() {
  modalbg.style.display = "none";
}

// Ferme la popup au click sur la croix du formulaire
closeCross.addEventListener("click", closeModal);