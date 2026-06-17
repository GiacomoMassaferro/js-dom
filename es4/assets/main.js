const input = document.querySelector("#input");

console.log(input);

const btn = document.querySelector("#btn");

console.log(btn);

input.addEventListener("input", () => {
    if (input.value.length >= 3) {
        btn.disabled = false;
        btn.textContent = "Submit";
    } else {
        btn.disabled = true;
        btn.textContent = "Too short";
    }
})