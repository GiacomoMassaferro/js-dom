const userInput = document.querySelector("#userInput");
const userOutput = document.querySelector("#userOutput");

userInput.addEventListener("input", () => {
    userOutput.textContent = userInput.value;
})