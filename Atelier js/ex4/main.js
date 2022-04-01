function change(id) {
  const element = document.getElementById(id);

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += toHex(Math.floor(Math.random() * 16));
  }

  element.style.color = color;
}

function toHex(num) {
  return num.toString(16);
}
