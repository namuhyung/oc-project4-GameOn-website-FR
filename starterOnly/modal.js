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

// Obtenir croix et bouton de fermeture
let closeCross = document.querySelector(".close");
const closeBtn = document.getElementById("closeForm")

// Fonction pour fermer la popup
function closeModal() {
  modalbg.style.display = "none";
}

// Ferme la popup au click sur la croix du formulaire
closeCross.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);


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

// Fonction pour enlever les messages d'erreur
function removeDataError() {
  const dataError = document.querySelectorAll("[data-error-visible]");
  dataError.forEach((dataError) => {
    dataError.removeAttribute("data-error");
    dataError.removeAttribute("data-error-visible");
  })
};

// Montre un message d'erreur si le champ n'est pas valide
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

// Quand le formulaire est envoyé
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche la page de se recharger
  const submitConfirm = document.getElementById("submitConfirm");
  form.classList.add("select-hide"); // Cache la div du formulaire
  submitConfirm.classList.remove("select-hide"); // Affiche le message de confirmation
});

// A l'appui du bouton d'envoi, enlever les erreurs précédentes
submitBtn.addEventListener("click", (event) => {
  removeDataError();
});