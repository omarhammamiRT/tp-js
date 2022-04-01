const content = document.getElementById("content");
const color = document.getElementById("color");
const fontSize = document.getElementById("fontSize");
const fontFamily = document.getElementById("fontFamily");

color.addEventListener("input", () => {
  content.style.color = color.value;
});

fontSize.addEventListener("input", () => {
  content.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("input", () => {
  content.style.fontFamily = fontFamily.value;
});
