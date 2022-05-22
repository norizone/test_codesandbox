const addButton = document.getElementById("add_button");
const addList = document.getElementById("add_todo");

addButton.addEventListener("click", () => {
  let addText = addList.value || null;
  if (addText) {
    const todo = new TodoList(addText);
    todo.init();
    addList.value = "";
  }
});

class TodoList {
  constructor(todoText) {
    this.parent = null;
    this.todoText = todoText;
    this.list = document.createElement("li");
    this.finBtn = document.createElement("button");
    this.removeBtn = document.createElement("button");
    this.returnBtn = document.createElement("button");
  }

  init() {
    this.parent = document.getElementById("todo_wrap");
    this.list.innerText = this.todoText;
    this.parent.appendChild(this.list);
    this.finBtn.innerText = "完了";
    this.removeBtn.innerText = "削除";
    this.list.appendChild(this.finBtn);
    this.list.appendChild(this.removeBtn);
    this.removeTodo();
    this.finTodo();
  }

  removeTodo() {
    this.removeBtn.addEventListener("click", () => {
      this.list.remove();
    });
  }

  finTodo() {
    this.finBtn.addEventListener("click", () => {
      this.list.remove();
      this.finBtn.remove();
      this.removeBtn.remove();
      this.parent = document.getElementById("fin_wrap");
      this.parent.appendChild(this.list);
      this.returnBtn.innerText = "戻っす";
      this.list.appendChild(this.returnBtn);
      this.returnTodo();
    });
  }

  returnTodo() {
    this.returnBtn.addEventListener("click", () => {
      this.list.remove();
      this.init();
    });
  }
}
