const form = document.querySelector("#contact-form");
const theName = document.querySelector("#name");
const nameError = document.querySelector ("#nameError")
const email = document.querySelector ("#email")
const emailError = document.querySelector ("#emailError")
const message = document.querySelector ("#message")
const messageError = document.querySelector ("#messageError")


function validateForm (event) {
    event.preventDefault();

    if(checkLength(theName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(message.value, 2) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}



form.addEventListener ("submit", validateForm);


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
