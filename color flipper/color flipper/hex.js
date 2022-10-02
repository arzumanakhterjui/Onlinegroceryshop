//const color_database = ["red", "green", "blue", "yellow", "violet", "purple"];
// document.querySelector("#btn").addEventListener("click", function () {
//   const index = Math.floor(Math.random() * 6);
//   console.log(index);

//   document.body.style.backgroundColor = `#${color_database[index]}`;
//   document.querySelector(".color").textContent = `#${color_database[index]}`;
//   document.querySelector(".color").style.color = `#${color_database[index]}`;
// });

const parentEl = document.querySelector(".container");

const generateColor = function () {
  const mixtures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const index1 = Math.floor(Math.random() * 16);
  const index2 = Math.floor(Math.random() * 16);
  const index3 = Math.floor(Math.random() * 16);
  const index4 = Math.floor(Math.random() * 16);
  const index5 = Math.floor(Math.random() * 16);
  const index6 = Math.floor(Math.random() * 16);

  const bgColor = `#${mixtures[index1]}${mixtures[index2]}${mixtures[index3]}${mixtures[index4]}${mixtures[index5]}${mixtures[index6]}`;

  document.body.style.backgroundColor = bgColor;
  document.querySelector(".color").textContent = bgColor;
  document.querySelector(".color").style.color = bgColor;
};

parentEl.addEventListener("click", generateColor);
