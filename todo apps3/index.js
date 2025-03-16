const inputBox= document.querySelector(".inBox");
const list= document.querySelector(".list");

function addText(){
    if(inputBox.value===''){
        alert("You must write something")
    }else{
        let li = document.createElement("li")
        li.textContent=inputBox.value
        list.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML= "❌";
        li.appendChild(span);
    }
    inputBox.value=""
    saveStorage();
}

list.addEventListener("click", (e)=>{

    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveStorage();
    }else if(e.target.tagName==="SPAN"){
          e.target.parentElement.remove();
          saveStorage();
    }
}, false);

function saveStorage(){
 localStorage.setItem("data", list.innerHTML)
}
function showText(){
    list.innerHTML=localStorage.getItem("data");
}
showText();