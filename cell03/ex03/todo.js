function addTodo(text) {
  const todo = document.createElement("div");
  todo.textContent = text;

  todo.onclick = function () {
    if (confirm("Do you want to remove this TO DO?")) {
      todo.remove();
      saveTodos();
    }
  };

  document.getElementById("ft_list").prepend(todo);
  saveTodos();
}

document.getElementById("new").onclick = function () {
  const text = prompt("New TO DO:");
  if (text && text.trim() !== "") {
    addTodo(text);
  }
};

function saveTodos() {
  const todos = [];
  document.querySelectorAll("#ft_list div").forEach(div => {
    todos.push(div.textContent);
  });
  document.cookie = "todos=" + encodeURIComponent(todos.join("||")) + ";path=/";
}

function loadTodos() {
  const cookies = document.cookie.split("; ");
  const todo = cookies.find(c => c.startsWith("todos="));
  if (!todo) return;

  const values = decodeURIComponent(todo.split("=")[1]).split("||");
  values.reverse().forEach(text => addTodo(text));
}

loadTodos();
