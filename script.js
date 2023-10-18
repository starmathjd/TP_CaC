'use strict';

/******************************************************************************/
/********************** DESPLAZAMIENTO DEL MENÚ SUPERIOR **********************/
/******************************************************************************/

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/******************************************************************************/
/****************** MANTENER LA BARRA SUPERIOR AL SCROLLEAR *******************/
/******************************************************************************/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/******************************************************************************/
/****************** BOTON PARA SUBIR AL INICIO DE LA PÁGINA *******************/
/******************************************************************************/

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});



/******************************************************************************/
/********************************* LOGIN *********************************/
/******************************************************************************/


var x = document.getElementById("login");
var y = document.getElementById("register");
function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  x.style.opacity = 1;
  y.style.opacity = 0;
}
function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  x.style.opacity = 0;
  y.style.opacity = 1;
}



//User Name
let UserNameInput = document.getElementById("username-input");
let UserNameError = document.getElementById("username-error");
let emptyUserNameError = document.getElementById("empty-username");
//Name
let NameInput = document.getElementById("name-input");
let NameError = document.getElementById("name-error");
let emptyNameError = document.getElementById("empty-name");
//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
//Confirmacion de Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");
//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");
//Para verificar el password
const passwordVerify = (password) => {
  const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  return regex.test(password) && password.length >= 8;
};
//verificación de texto
const textVerify = (text) => {
  const regex = /^[a-zA-Z0-9\_\-]{3,}$/;
  return regex.test(text);
};
const textVerifyname = (text) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  return regex.test(text);
};
//verificación de email
const emailVerify = (input) => {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(input);
};
//si no completan nada
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    emptyErrorReference.classList.add("hide");
  }
};
//Erorres 1
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};
//Errores 2
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};
//User name
UserNameInput.addEventListener("input", () => {
  if (textVerify(UserNameInput.value)) {
    UserNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    errorUpdate(UserNameInput, UserNameError);
    emptyUpdate(UserNameInput, emptyUserNameError, UserNameError);
  }
});
//Name
NameInput.addEventListener("input", () => {
  if (textVerifyname(NameInput.value)) {
    NameError.classList.add("hide");
    validInput(NameInput);
  } else {
    errorUpdate(NameInput, NameError);
    emptyUpdate(NameInput, emptyNameError, NameError);
  }
});
//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
//Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});
//verificación de password
verifyPasswordInput.addEventListener("input", () => {
  if (verifyPasswordInput.value === passwordInput.value) {
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});
