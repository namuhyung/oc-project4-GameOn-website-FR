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
const closeBtn = document.getElementById("closeForm")

// fermer la popup
function closeModal() {
  modalbg.style.display = "none";
}

// Ferme la popup au click sur la croix du formulaire
closeCross.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);


// 2nd step
// Récupération des informations du formulaire
const form = document.querySelector("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelector("input[name='location']");
const gcu = document.getElementById("checkbox1");
const submitBtn = document.querySelector(".btn-submit");

function removeDataError() {
  const dataError = document.querySelectorAll("[data-error-visible]");
  dataError.forEach((dataError) => {
    dataError.removeAttribute("data-error");
    dataError.removeAttribute("data-error-visible");
  })
};

firstName.addEventListener("invalid", () => {
  const formDataElement = firstName.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

lastName.addEventListener("invalid", () => {
  const formDataElement = lastName.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

email.addEventListener("invalid", () => {
  const formDataElement = email.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

birthdate.addEventListener("invalid", () => {
  const formDataElement = birthdate.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez entrer votre date de naissance.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

quantity.addEventListener("invalid", () => {
  const formDataElement = quantity.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez entrer 1 nombre entre 0 et 99.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

city.addEventListener("invalid", () => {
  const formDataElement = city.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez choisir une option.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);

gcu.addEventListener("invalid", () => {
  const formDataElement = gcu.parentElement;
  formDataElement.setAttribute("data-error", "Veuillez accepter les CGU.")
  formDataElement.setAttribute("data-error-visible", "true");
  }
);


form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche la page de se recharger
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let listLocation = document.querySelectorAll("input[name='location']");
  let location = "";
  for(let i = 0; i < listLocation.length; i++) {
    if(listLocation[i].checked) {
      location = listLocation[i].value
      break
    }
  }
  const submitConfirm = document.getElementById("submitConfirm");
  form.classList.add("select-hide");
  submitConfirm.classList.remove("select-hide");
  console.log(form);

});

submitBtn.addEventListener("click", (event) => {
  removeDataError();
});