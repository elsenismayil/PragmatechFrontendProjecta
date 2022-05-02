let inpt =document.querySelector(".main-in")

inpt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
       
        event.preventDefault();
        addComment();
      
    }
   
});

let comCount = document.querySelector(".count")


var k = 0;
var counter = 0




let sec =document.querySelector(".comentary-container")




function addComment(){
    counter++
    document.querySelector(".count").innerHTML=counter
    var a = 0
    a = ++k;
    sec.innerHTML+=`
    <div onclick="deleteComentary(${a-1})" class="coommentary">
    <div class="profile">
        
    </div>
    <div class="main-comment">
          <h1>
              Elşən İsmayılov
          </h1>
          <div class="text">
                  ${document.querySelector(".main-in").value}
          </div>
    </div>
    </div> `
    
}

function deleteComentary(i){
    
    
    let comentary = document.querySelectorAll('.coommentary')
    comentary[i].style.display = 'none'
}


