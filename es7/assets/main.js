const person = {
    name: "Giacomo",
    role: "Future Junior Web Dev",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3Jbl6zlsxO8dbhw7T2vDGXGnCp7whEfkmKkauRZqeg&s=10",
}

const card = document.querySelector("#myCard");

card.querySelector("img").src = person.img;
card.querySelector(".card-title").textContent = person.name;
card.querySelector(".card-text").textContent = person.role;