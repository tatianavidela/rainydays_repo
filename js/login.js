const loginForm = document.querySelector("#login-form");


const loginEmail = document.querySelector ("#loginEmail")
const loginEmailError = document.querySelector ("#loginEmailError")

const loginPassword = document.querySelector ("#loginPassword")
const loginPasswordError = document.querySelector ("#loginPasswordError")





function validateLoginForm (event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(loginPassword.value, 6) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}



loginForm.addEventListener ("login", validateLoginForm);


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
