const todoList = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = "";

  for(let i = 0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    //const { name, dueDate } = todoObject;
    const html = `
    <div class="">${name}</div>
    <div class="">${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list")
    .innerHTML = todoListHTML;
}


function addTodo(){
  const inputElement = document.querySelector(".js-name-input");
  const inputValue = inputElement.value;

  const inputDate = document.querySelector(".js-date-input");
  const dateValue = inputDate.value;
  todoList.push({
    name: inputValue,
    dueDate: dateValue 
  });
  console.log(todoList);

  inputElement.value="";
  
  renderTodoList();
}