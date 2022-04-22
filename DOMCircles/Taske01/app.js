// function createCircle(_selector, _radius, _backgroundColor) {
    // Verilən parametrlərə əsasən dairə yaradan metod yazın
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
// }
function createCircle(selector,radius,backgroundColor){
let div = document.createElement('div')
div.style.width =`${radius}px`
div.style.height=`${radius}px`
div.style.borderRadius = '50%'
div.style.backgroundColor=backgroundColor
let container = document.querySelector(selector)
container.appendChild(div)
}
createCircle('.main','80','green')
