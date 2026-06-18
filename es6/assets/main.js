const inputPassword = document.querySelector("#inputPassword");
const verifyPassword = document.querySelector("#verifyPassword");
const warning = document.querySelector("#warning");

console.log(inputPassword, verifyPassword, warning);

verifyPassword.addEventListener("input", () => {
    if (inputPassword.value !== verifyPassword.value) {
        warning.textContent = "Le password non corrispondono";
    } else {
        warning.textContent = "Accesso consentito";
    }
})