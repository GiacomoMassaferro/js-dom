const card = document.querySelector("#myCard");

card.querySelector("img").src = person.picture;
card.querySelector(".card-title").textContent = person.name;
card.querySelector(".card-text").textContent = person.role;