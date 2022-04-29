let inpt =document.querySelector(".main-in")

inpt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
       
        event.preventDefault();
        addComment();
        increase();
        // commentCount();
    }
   
});








let comCount = document.querySelector(".count")


var k = 0;
var counter = 0


function addComment(){
    counter++
    document.querySelector(".count").innerHTML=counter
    var a = 0
    a = ++k;
    document.querySelector(".comentary-container").innerHTML+= `
    <div onclick="deleteComentary(${a-1})" class="coommentary">
    <div class="profile">
        
    </div>
    <div class="main-comment">
          <h1>
              Elsen Ismayilov
          </h1>
          <div class="text">
                  ${document.querySelector(".main-in").value}
          </div>
    </div>
</div> `
}

function deleteComentary(i){
    // document.querySelector(".count").innerHTML=delcounter
    let comentary = document.querySelectorAll('.coommentary')
    comentary[i].style.display = 'none'
}


