
let input = document.querySelector(".int")
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        event.preventDefault();
        creatButton()
    }
});
let butonsArea = document.querySelector(".buttons-area")

var i = 0;
function creatButton() {
    let a = 0
    a = ++i;
    butonsArea.innerHTML += `
    <button onclick="show(${a - 1})" 
     class="btn middle wid-111  main-func">
     ${document.querySelector(".int").value}

     <div class="circle"><i class="fa-brands fa-vimeo-v"></i></div>
     </button>`
}

function show(i) {
    let circle = document.querySelectorAll(".circle")
    let butx = document.querySelectorAll(".main-func")
    if (circle[i].style.display === 'none') {
        circle[i].style.display = 'block'
        butx[i].style.backgroundColor = 'lightblue'
        butx[i].style.border = 'lightblue'

    } else {
        circle[i].style.display = 'none'
        butx[i].style.backgroundColor = 'rgb(208, 198, 198)'
        butx[i].style.border = 'rgb(208, 198, 198)'




    }
}

