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

let counter = 0;

document.querySelector(".haircut_name").innerHTML = `${cutsMenu[counter].name}`;
document.querySelector(
  ".cut-description"
).innerHTML = `${cutsMenu[counter].description}`;
document.querySelector(".price").innerHTML = `$${cutsMenu[counter].price}`;
document
  .querySelector(".haircut_image img")
  .setAttribute("src", `${cutsMenu[counter].url}`);

// document.querySelector(".haircut_name").innerHTML = `${cutsMenu[0].haircut1.name}`

const previousBtn = document.getElementById("prev-button");

const nextBtn = document.getElementById("next-button");

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
  document.querySelector(".price").innerHTML = `$${cutsMenu[counter].price}`;
  document
    .querySelector(".haircut_image img")
    .setAttribute("src", `${cutsMenu[counter].url}`);
};

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
  document.querySelector(".price").innerHTML = `$${cutsMenu[counter].price}`;
  document
    .querySelector(".haircut_image img")
    .setAttribute("src", `${cutsMenu[counter].url}`);
};

nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);
