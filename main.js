const submitButton = document.querySelector("input");
const url = "https://pokeapi.co/api/v2/pokemon/6"
const image = document.querySelector(".favorite-pokemon")

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
});
fetch(url)
.then((response) => response.json())
.then((data) => {
    image.innerHTML = `<strong/> My favorite pokemon is <strong/> ${data.name}`
})