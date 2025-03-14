// const isUserLogin = true;
// const userName = 'Fakrul Islam'

// if(isUserLogin){
//     localStorage.setItem("isUserLogin", isUserLogin);
// }

// localStorage.setItem("UserName",userName);

// const ls= localStorage.getItem("UserName")
// const login= localStorage.getItem("isUserLogin")
// console.log(ls);
// console.log(login);

// const userInfo = {
//     userNsmane : "Fakrul",
//     age :26,
//     id :121
// };
// const loc =JSON.stringify(userInfo)
//  const lsset=localStorage.setItem("userIfo", loc);

//  const storData= localStorage.getItem("userIfo");
//  const restorData = JSON.parse(storData);
//  console.log(restorData.userNsmane)
//  console.log(restorData.age);


// const userInfo =[
//     { userName : "Fakrul",age:26, id:1212 },
//     { userName : "Rakib",age:32, id:212 },
// ]

// const userStyingfi = JSON.stringify(userInfo);

// localStorage.setItem("userIn", userStyingfi);
// const getIt = localStorage.getItem("userIn")
// const itemParese= JSON.parse(getIt);
// console.log(getIt);
// console.log(itemParese);

// itemParese.forEach((users)=>{
//     console.log(users.age, users.userName)
   
// })


// todo Apps start

const from = document.querySelector("form");
const input= document.querySelector(".btn");
const addText = document.querySelector(".add-text")
const ul = document.querySelector("ul");

 const loadTodoLocalStorage= ()=>{
//input focus 
 input.focus();
const todo = JSON.parse(localStorage.getItem("todos"))||[];
 console.log(todo)

 if(todo.length>0){
    todo.forEach(tod => {
        const li =document.createElement("li");
        li.textContent= tod.text;
        if(tod.complete){
            li.classList.add("completed");
        }
        ul.appendChild(li)
    });
 }

 };
 loadTodoLocalStorage();

from.addEventListener("submit", (event)=>{
    event.preventDefault();
    const text= input.value
//    console.log(text);

   const li= document.createElement("li");
   li.textContent= text;
   ul.appendChild(li);

input.value=""
const todos= JSON.parse(localStorage.getItem
    ("todos"))||[];

todos.push({text:text, completed: false});
localStorage.setItem("todos", JSON.stringify
    (todos));

});

ul.addEventListener("click", (e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName==="LI"){
  e.target.classList.toggle("completed");
    }

    
const todos = JSON.parse(localStorage.getItem
    ("todos"))||[];

const update = todos.map((todo)=>{
   if( todo.text=== e.target.textContent){
    todo.complete= !todo.complete
   }
   return todo
});

localStorage.setItem("todos", JSON.stringify(update));
});