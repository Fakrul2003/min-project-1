const container = document.querySelector(".container");
const todoForm = document.querySelector(".form");
const todoInput = document.querySelector("#inputTodo");
const todoButton = document.querySelector("#addTodobtn");
const todoLists = document.querySelector(".list");
const todoMessage = document.querySelector(".message");


const createTodo = (todoId, todoValue)=>{
    const todoElement = document.createElement("li")
    todoElement.id = todoId;
    todoElement.classList.add("li-style");
    todoElement.innerHTML = `
    <span>${todoValue}</span>
   <span><button class ="btn" id ="deleteButton" >
   <i class="fa-solid fa-trash"  ></i></button></span>
    `;
    todoLists.prepend(todoElement);

    const deleteBtn = todoElement.querySelector("#deleteButton");
    deleteBtn.addEventListener("click", deletTodo);

};
const deletTodo = (event) => {
    const selectTodo = event.target.closest("li"); // সঠিক <li> খুঁজে বের করা
    if (selectTodo) {
        todoLists.removeChild(selectTodo); // UI থেকে মুছে ফেলা
        showMessage("todo is deleted", "danger");

        // localStorage থেকে মুছে ফেলা
        let todos = getTodosFromLocalStorage();
        const updatedTodos = todos.filter(todo => todo.todoId !== selectTodo.id);
        localStorage.setItem("myTodos", JSON.stringify(updatedTodos));
    }
};

const showMessage = (Text , stutas)=>{
    todoMessage.textContent = Text;
    todoMessage.classList.add(`message-${stutas}`);

    setTimeout(()=>{
        todoMessage.textContent = "";
        todoMessage.classList.remove(`message-${stutas}`);

    }, 1000)

}
// getTodosFromLocalStorage
const getTodosFromLocalStorage = ()=>{
   return localStorage.getItem("myTodos") ? JSON.parse(
        localStorage.getItem("myTodos")) : [];
};

const addTodo =(event)=>{
    event.preventDefault();
const todoValue = todoInput.value;

//create unique id

const todoId = Date.now().toString();

createTodo(todoId, todoValue);
showMessage("todo is here" , "style");
//localStorage
const todos = getTodosFromLocalStorage();
 todos.push({todoId, todoValue});
 localStorage.setItem("myTodos", JSON.stringify(todos));

 todoInput.value= "";


};
// todoLode
const todoLode = ()=>{
const todos = getTodosFromLocalStorage();
todos.map((todo)=>createTodo(todo.todoId, todo.todoValue));
};

// adding listeners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", todoLode);