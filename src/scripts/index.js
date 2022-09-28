// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import recipes from "./data.js";

const recipesParsed = JSON.parse(recipes);

// \/ All of your javascript should go here \/
const cakesSection = document.querySelector("#cakes");
// console.log("cakesSection", cakesSection);
const biscuitsSection = document.querySelector("#biscuits");
const breadSection = document.querySelector("#bread");
const container = document.querySelector(".container");

// console.log(recipesParsed);
// console.log(Object.entries(recipesParsed));

// cakesSection.classList.add("justify-content-between");

for (const [key, value] of Object.entries(recipesParsed)) {
  //   console.log(key);
  createCard(value, key);
}

// Create Card Function
function createCard(value, key) {
  //   return new Promise((resolve) => {
  //   console.log(key);
  //   console.log(value);

  for (const item of value) {
    // console.log(item);

    // Card Container
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.style.width = "18rem";
    cardContainer.style.marginRight = "2rem";

    // Image
    const img = document.createElement("img");
    img.classList.add("card-img-top", "img-fluid");
    img.src = item.image;
    img.style.height = "14rem";

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Heading
    const heading = document.createElement("h5");
    heading.classList.add("card-title");
    heading.textContent = item.title;

    // Person Name
    const personName = document.createElement("p");
    personName.classList.add("card-text", "border-bottom");
    personName.textContent = item.author;

    // Ingredients
    const ingredients = document.createElement("p");
    ingredients.classList.add("card-text");
    ingredients.textContent = item.ingredients;

    cardContainer.append(img, cardBody);
    cardBody.append(heading, personName, ingredients);

    container.querySelector(`#${item.type}`).append(cardContainer);
  }
  //   });
}

// createCard().then(() => {});
