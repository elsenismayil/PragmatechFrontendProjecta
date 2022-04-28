
let animation = document.querySelector(".animation")
let body = document.querySelector("body")
let circle = document.querySelector(".circle")
// let aniArea = document.querySelector(".animation-area")
function Change(){
 if(animation.style.justifyContent!="flex-end"){
      animation.style.justifyContent="flex-end"
      body.style.backgroundColor="rgb(19, 18, 18)"
       document.querySelector(".sun").style.display="none"
       document.querySelector(".moon").style.display ="block"
       animation.style.backgroundColor ="black"
       document.querySelector(".light").style.color ="gray"
       document.querySelector(".dark").style.color="white"
       
       }else{
    animation.style.justifyContent="flex-start"
    body.style.backgroundColor="white"
    document.querySelector(".sun").style.display="block"
    document.querySelector(".moon").style.display ="none"
    animation.style.backgroundColor ="rgb(59, 59, 178)"
    document.querySelector(".light").style.color ="black"
    document.querySelector(".dark").style.color="gray"
    
 }
}