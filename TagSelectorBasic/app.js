let circle = document.querySelectorAll('.circle')
let buttons = document.querySelectorAll('.btn')
    
 function showCircle(i){
    if(circle[i].style.display ='none'){
        circle[i].style.display ='block'
        buttons[i].style.backgroundColor='blue'
        buttons[i].style.color='white'
        
    }else{
        circle[i].style.display ='none'
        buttons[i].style.backgroundColor='rgb(214, 228, 232)'
        buttons[i].style.color ='black'
    }
 }