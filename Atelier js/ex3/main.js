let id = 0;
function addTodo() {
  let title = document.getElementById("title");
  let content = document.getElementById("content");
  const todos = document.getElementById("todos");
  const todo = document.createElement("li");
  todo.id = id;
  // innerHTML: content
  todo.innerHTML = `
  <div class="card">
  <div class="card-body">
  ${title.value}: ${content.value}
  <button onclick="deleteTodo(${id})" class="btn btn-danger" style='float: right;'><i class='bi bi-trash3-fill'></i></button>
  </div>
</div>
`;
  todos.appendChild(todo);
  id++;
  title.value = "";
  content.value = "";
}

function deleteTodo(id) {
  const todo = document.getElementById(id);
  todo.remove();
}
