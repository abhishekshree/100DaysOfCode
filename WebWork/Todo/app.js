//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    
    //TodoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Add todo to storage
    saveLocalTodos(todoInput.value);

    //Check mark
    const completedButton = document.createElement("Button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    //Dlete mark
    const trashButton = document.createElement("Button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //Clear todo input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // Check
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    // console.log(todos);
    // console.log(e.target.value);
    todos.forEach(function(todo){
        // console.log(todo.classList.contains("completed"));
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // Loop for every element in todos and redo the add todos function
    todos.forEach(function(todo){
    
    //TodoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo; //only change here
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark
    const completedButton = document.createElement("Button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    
    //Delete mark
    const trashButton = document.createElement("Button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const TodoIndex = todo.children[0].innerText; //get the todo work text
    todos.splice(todos.indexOf(TodoIndex), 1); //find the position of the text in the array using indexOf function and use splice to delete.
    localStorage.setItem('todos', JSON.stringify(todos));

}