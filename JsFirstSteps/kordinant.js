let a_x = 120
let a_y = 200
let b_x = 230
let b_y = 400
let c_x = 210
let c_y = 345


let a_b = ((b_x-a_x)**2 + (b_y-a_y)**2)**0.5
let a_c = ((c_x-a_x)**2 + (c_y-a_y)**2)**0.5
if(a_b>a_c){
    console.log("c daha yaxindi")
}else{
    console.log("b daha yaxindi")
}

