const inputPassword = document.querySelector("input");

console.log(inputPassword)

const button = document.querySelector("button");

console.log(button);

button.addEventListener("click", () => {
    button.classList.remove("btn-primary");
    if (inputPassword.type === "password") {
        inputPassword.type = "text";
        button.textContent = "hyde password";
        button.classList.remove("btn-success");
        button.classList.add("btn-danger");
    } else if (inputPassword.type === "text") {
        inputPassword.type = "password";
        button.textContent = "show password";
        button.classList.remove("btn-danger");
        button.classList.add("btn-success");
    }
})