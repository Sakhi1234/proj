// const hamburg=document.querySelector(".hamburger");
// const close=document.querySelector(".close");
// const buttons=document.querySelector(".button");
// const nav=document.querySelector(".nav-ul");
// hamburg.addEventListener("click",()=>{
//     nav.classList.toggle("show");
//     hamburg.classList.toggle("hide");
//     buttons.classList.toggle("show");
// })
// close.addEventListener("click",()=>{
//         nav.classList.toggle("show");
//         hamburg.classList.toggle("hide");
//         buttons.classList.toggle("hide");
// })
var mebn=document.getElementById("mbn");
var sidenavigate=document.getElementById("sidenavigate");
var menu=document.getElementById("menu");
sidenavigate.style.right="-250px";
mebn.onclick=function(){
    if(sidenavigate.style.right=="-250px"){
        sidenavigate.style.right="0";
        menu.src="./close.png";
    }
    else{
        sidenavigate.style.right="-250px";
        menu.src="./menu.png";
    }
}
const popup=document.querySelector(".popup");
    const closep=document.querySelector(".cicons");
    window.onload=function(){
        setTimeout(function(){
            popup.style.display="block";
        },7000)
    }
    closep.addEventListener("click",()=>{
        popup.style.display="none";
    })
    AOS.init({
      duration:2000,
    });