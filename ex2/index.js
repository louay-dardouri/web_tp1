const target = document.querySelector("#target");
const couleur = document.querySelector("#cl");
const size = document.querySelector("#nu");
const sel = document.querySelector("#sel");

couleur.addEventListener("input", () => {
  target.style.color = couleur.value;
});
size.addEventListener("input", () => {
  target.style.fontSize = `${size.value}px`;
});
sel.addEventListener("input", () => {
  target.style.fontFamily = sel.value;
});
