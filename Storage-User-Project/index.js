const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const mainElement = document.querySelector(".main");
const resetButton = document.getElementById("resetButton");

const setValus =( fontS, bgC)=>{
  selectFontSize.value=fontS;
  selectBgColor.value=bgC;
  mainElement.style.fontSize= fontS;
  mainElement.style.backgroundColor= bgC;


}
// initioal set up
const initioalSetup = ()=>{
  const size = localStorage.getItem("fontSize");
  const color = localStorage.getItem("backgrountColor");
  if(size && color){
    setValus(size, color);
  }
  if(!size && color){
    setValus("16px", color);
  }
  if(size && !color){
    setValus(size, "aqua");
  }
  
  

}

const changeFontSize= (event)=>{
const selectF = event.target.value;

  mainElement.style.fontSize = selectF;
  localStorage.setItem("fontSize", selectF);
}

const changeBgColor= (event)=>{
const selectB =  event.target.value
  mainElement.style.backgroundColor =selectB;
  localStorage.setItem("backgrountColor", selectB);

}

const resetButn= ()=>{
localStorage.removeItem("fontSize");
localStorage.removeItem("backgrountColor");
setValus("16px", "aqua");

}

//add event Listeners

selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", resetButn);

initioalSetup();
