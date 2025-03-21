const productApi="https://fakestoreapi.com/products";
 
const container= document.querySelector(".container");

async function creatCard(){

    const res = await fetch(productApi);
    const products= await res.json();

    products.forEach((product)=>{
        const card= document.createElement("div");
        card.classList.add("card");
       // truncate Description শুরু। 
       const truncateDestription = product.description.substring(0, 100);
       const fullDescription= product.description;
       // truncate Description শেষ।
       card.innerHTML=`
         <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p class="description">${truncateDestription}... </p>
        <button class="read-more">Read more</button>
            <p class="price">$${product.price}</p>
            <button class="orderButton">Order now</button>
        `;
          container.appendChild(card);
            const orderBtn= card.querySelector(".orderButton");
            orderBtn.addEventListener("click",()=>{
              console.log("hello");
            });
          const readMoreBtn= card.querySelector(".read-more");
          const descriptions= card.querySelector(".description");

          readMoreBtn.addEventListener("click",()=>{
            console.log(descriptions.innerText);
             if(descriptions.innerText=== truncateDestription +"..."){
                 descriptions.innerText= fullDescription;
                 readMoreBtn.innerText= "Read less"
             }else{
              descriptions.innerText= truncateDestription +"...";
               readMoreBtn.innerText= "Read more"
             }
          });
          

    });
}
 creatCard();