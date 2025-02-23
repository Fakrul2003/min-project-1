//    আগে 
//  const posts = [
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
  
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
//   {
//     title:"This is title1",
//     Body:"This is body1"
//   },
// ];

// পরে start
  const fetchData = async (config)=>{
    try{
      const result = await axios(config)
      return result.data;
    }catch(error){
      throw Error("Data is not fetch")
    }
  }
// পরে ends


const postsElement = document.querySelector(".posts");

const loadAllData =async ()=>{
// পরে start
  const posts = await  fetchData("https://jsonplaceholder.typicode.com/posts")
// পরে ends

  posts.map((post)=>{
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML=`
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.Body} </p>
    `;

    postsElement.appendChild(postElement);
  });
};

loadAllData();
