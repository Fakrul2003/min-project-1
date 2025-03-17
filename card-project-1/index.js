const data = "https://jsonplaceholder.typicode.com/users";
console.log(data);
const card= document.querySelector(".container");

function crateCard(){
    fetch(data)
    .then((res)=>{
        if(res.ok){
            return res.json();
        }
            throw new Error("somethin went wrong");
        
    })
    .then((users)=>{
        users.forEach((user) => {
            
        const cards=document.createElement("div");
        cards.classList.add("card");
        cards.innerHTML=`
         <h1>${user.name} </h1>
        <p>${user.email}</p>
        <p>website: www.yahooh.com</p>
        <p>phone: 01987668401</p>
        `
        card.appendChild(cards);
        });
    })
    .catch((err) => {
     console.log(err.message)
    });
    
}
crateCard();