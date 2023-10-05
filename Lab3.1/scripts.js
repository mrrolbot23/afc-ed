// Array of objects that will be used to display our menu content through DOM manipulation
const cutsMenu = [
  {
    name: "Low Fade",
    description:
      "Hair length gradually becomes shorter on the sides and the fade effect continues around your head.",
    price: 30,
    url: "./assets/low-fade.jpeg",
  },
  {
    name: "Mid Fade",
    description:
      "The tapering begins above the eyebrow level and gets blurred out between the temple and ears.",
    price: 35,
    url: "./assets/mid-fade.jpeg",
  },
  {
    name: "Flattop",
    description:
      "One kind of short haircut where the top of the head resembles a flat.",
    price: 25,
    url: "./assets/flattop.jpeg",
  },
  {
    name: "Bowl Cut",
    description:
      "Haircut where the front hair is cut with a straight fringe and the rest of the hair is left longer.",
    price: 15,
    url: "./assets/bowl-cut.png",
  },
  {
    name: "Comb Over",
    description:
      "Hairstyle commonly worn by balding men in which the hair is grown long and combed over the bald area.",
    price: 200,
    url: "./assets/comb-over.jpeg",
  },
];

// This is the content that will load initially
let counter = 0;

document.querySelector(".haircut_name").innerHTML = `${cutsMenu[counter].name}`;
document.querySelector(
  ".cut-description"
).innerHTML = `${cutsMenu[counter].description}`;
document.querySelector(".price").innerHTML = new Intl.NumberFormat("en-EN", {
  style: "currency",
  currency: "USD",
}).format(cutsMenu[counter].price);
document
  .querySelector(".haircut_image img")
  .setAttribute("src", `${cutsMenu[counter].url}`);
document
  .querySelector(".haircut_image img")
  .setAttribute("alt", `${cutsMenu[counter].name}`);

// This variables were made to have a cleaner function below
const previousBtn = document.getElementById("prev-button");

const nextBtn = document.getElementById("next-button");

// Function for the menu button "Next"
const next = () => {
  counter++;
  while (counter > cutsMenu.length - 1) {
    counter = 0;
  }
  document.querySelector(
    ".haircut_name"
  ).innerHTML = `${cutsMenu[counter].name}`;
  document.querySelector(
    ".cut-description"
  ).innerHTML = `${cutsMenu[counter].description}`;
  document.querySelector(".price").innerHTML = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(cutsMenu[counter].price);
  document
    .querySelector(".haircut_image img")
    .setAttribute("src", `${cutsMenu[counter].url}`);
  document
    .querySelector(".haircut_image img")
    .setAttribute("alt", `${cutsMenu[counter].name}`);
};

// Function for the menu button "Prev"
const previous = () => {
  counter--;

  while (counter < 0) {
    counter = 4;
  }

  document.querySelector(
    ".haircut_name"
  ).innerHTML = `${cutsMenu[counter].name}`;
  document.querySelector(
    ".cut-description"
  ).innerHTML = `${cutsMenu[counter].description}`;
  document.querySelector(".price").innerHTML = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(cutsMenu[counter].price);
  document
    .querySelector(".haircut_image img")
    .setAttribute("src", `${cutsMenu[counter].url}`);
  document
    .querySelector(".haircut_image img")
    .setAttribute("alt", `${cutsMenu[counter].name}`);
};

// Event Listeners for both menu buttons
nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);
