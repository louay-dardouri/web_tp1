const btn = document.querySelector("#btn");
const todoName = document.querySelector("input[name=name]");
const content = document.querySelector("input[name=content]");
const todos = document.querySelector(".todos");

btn.addEventListener("click", () => {
  if (todoName.value.trim() && content.value.trim()) {
    const todo = document.createElement("div");
    todo.classList.add("list-group-item");

    const txt = document.createElement("span");
    txt.textContent = `${todoName.value}: ${content.value}`;
    todo.appendChild(txt);

    const del = document.createElement("img");
    del.src = "./trash.svg";
    del.style.width = "20px";
    todo.appendChild(del);

    todos.appendChild(todo);
  }
});

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() == "img") {
    todos.removeChild(e.target.parentNode);
  }
});
