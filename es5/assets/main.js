const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const total = document.querySelector("#total");

console.log(price, quantity, total);


function getPrice() {
    const inputPrice = Number(price.value);
    const inputQuantity = Number(quantity.value);
    const calc = inputPrice * inputQuantity;
    if (isNaN(calc) === true) {
        total.textContent = "ERRORE";
    } else {
        total.textContent = "Il totale è: " + calc;
    };
}

price.addEventListener("input", getPrice);
quantity.addEventListener("input", getPrice);