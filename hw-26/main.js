const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");

const handleAddTodo = (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  const todo = document.createElement("li");
  todo.textContent = text;
  list.insertAdjacentElement("beforeend", todo);
  input.value = "";
  input.focus();
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✕";
  todo.insertAdjacentElement("beforeend", removeBtn);
};
const handleRemove = (event) => {
  if (event.target.closest("button")) {
    event.target.closest("li").remove();
  }}
form.addEventListener("submit", handleAddTodo);
list.addEventListener("click", handleRemove);
