let button = document.querySelector("button");

button.addEventListener("click", backgroundChangerColor);

let randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.background = `#${randomColor}`;

function backgroundChangerColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(`#${randomColor}`);
  document.body.style.background = `#${randomColor}`;
}
