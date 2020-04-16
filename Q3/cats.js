const button = document.querySelector("button");
const article = document.querySelector("article");

button.addEventListener("click", getCats);


function getCats() {
    fetch("https://raw.githubusercontent.com/akcalp/COMP1073Final/master/Q3/cats.json")
        .then((response) => {
            return response.json();
    }).then((data) => {
        showCats(data);
    })
}


function showCats(json) {
    const cats = json.cats;
    const li = document.createElement("li");

        for (let i = 0; i < cats.length; i++) {
            const list = document.createElement("li");
            const name = document.createElement("h4");
            const species = document.createElement("p");
            const favFoods = document.createElement("p");
            const age = document.createElement("p");
            const photo = document.createElement("img");

            name.textContent = "Name: " + cats[i].name;
            species.textContent = "Species: "+cats[i].species;
            favFoods.textContent = "Favourite Foods: "+cats[i].favFoods;
            age.textContent = "Age:" +cats[i].age;
            photo.setAttribute("src", cats[i].photo);
            photo.style.height = "300px";
            photo.style.width = "%50";

            list.appendChild(name);
            list.appendChild(species);
            list.appendChild(favFoods);
            list.appendChild(age);
            list.appendChild(photo);

            li.appendChild(list);
        }

    article.appendChild(li)
}
