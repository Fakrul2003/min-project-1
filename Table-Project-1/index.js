const datas= "https://jsonplaceholder.typicode.com/users";

const table= document.querySelector(".table");
function getData(){
    fetch(datas)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })
}
getData();

document.addEventListener("DOMContentLoaded",getUsers);


function getUsers(){
    fetch(datas)
    .then((res)=>{
        if(res.ok){
         return   res.json();
        }else{
            throw new Error("Somthing went to wrong")
        }
    })
    .then((users)=>{
     users.forEach(usre => {
        const row=`<tr>
        <td>${usre.id}</td>
        <td>${usre.name}</td>
        <td>${usre.email}</td>
        </tr>`;
        table.innerHTML+=row;
        
     });
    })
    .catch((err)=>{
        const erros= document.getElementById("error");
        erros.innerHTML=err.message;
    });
    
}
getUsers();