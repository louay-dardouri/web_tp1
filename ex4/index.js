function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() == "li") {
    e.target.style.color = getRandomColor();
  }
});
