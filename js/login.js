const loginForm = document.querySelector("#login-form");


const loginEmail = document.querySelector ("#loginEmail")
const loginEmailError = document.querySelector ("#loginEmailError")

const loginPassword = document.querySelector ("#loginPassword")
const loginPasswordError = document.querySelector ("#loginPasswordError")

const loginformMessage = document.querySelector(".loginform-message");



function validateLoginForm (event) {
    event.preventDefault();

    if (validateEmail(loginEmail.value) === true) {
        loginEmailError.style.display = "none";
    } else {
        loginEmailError.style.display = "block";
    }

    if(checkLength(loginPassword.value, 6) === true) {
        loginPasswordError.style.display = "none";
    } else {
        loginPasswordError.style.display = "block";
    }
 validForm()
}



loginForm.addEventListener ("submit", validateLoginForm);


function checkLength (value, len){
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validForm () {
    if (validateEmail(loginEmail.value) && checkLength(loginPassword.value, 6)) {
        loginformMessage.innerHTML = `<div class="validform"> You are now logged in </div> `;
        loginForm.reset();
    } else {
        loginformMessage.innerHTML = `<div class="unvalidform"> Wrong password or email </div> `;
     }
}