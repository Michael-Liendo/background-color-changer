let button = document.querySelector("button");

button.addEventListener("click", backgroundChangerColor);

function backgroundChangerColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(`#${randomColor}`);
  document.body.style.background = `#${randomColor}`;
}
