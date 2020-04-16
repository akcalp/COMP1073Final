const button = document.querySelector("button");
const cardBody = document.querySelector("cats-body");


function getCats() {
    loadCats("", showCats)
}


function loadCats(url, callback) {

}


function showCats(json) {
    const cats = json.cats;
    const li = document.createElement("li");
    for (let i = 0; i < cats.length; i++)

        for (let i = 0; i < cats.length; i++) {
            const list = document.createElement("li");
            const article = document.createElement("article");
            const name = document.createElement("h4");
            const species = document.createElement("p");
            const favFoods = document.createElement("p");
            const age = document.createElement("p");
            const photo = document.createElement("img");

            name.textContent = cats[i].name;
            species.textContent = cats[i].species;
            favFoods.textContent = cats[i].favFoods;
            age.textContent = cats[i].age;
            photo.setAttribute("src", cats[i].photo);

            list.appendChild(name);
            list.appendChild(species);
            list.appendChild(favFoods);
            list.appendChild(age);
            list.appendChild(photo);
        }
    li.appendChild(list);
}

//
//     fetch("cats.json").then(function (response) {
//         console.log("fetching");
//         return response.json();
//     }).then(function (data) {
//         callback(data);
//     })
// }
//
// button.addEventListener("click",showCats);