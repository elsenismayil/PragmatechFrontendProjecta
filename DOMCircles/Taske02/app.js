// function createMultipleCircle(_selector, _circleCount, _radius, _backgroundColor) {
    // Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairələrdən ən böyük dariənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
// }

function createMultipleCircle(selector, circleCount, radius,backgroundColo ){
for(let j= 0 ;j<radius/2; j+=radius/2/circleCount){
        let container =document.querySelector(`${selector}`)
        container.style.backgroundColor=backgroundColo
        let circele =document.createElement('div')
        circele.style.width = `${j}px`
        circele.style.height =`${j}px`
        circele.style.display='flex'
        circele.style.justifyContent='center'
        circele.style.alignItems = 'center'
        circele.style.position='absolute'
        circele.style.borderRadius='50%'
        circele.style.border ='1px solid black'
        container.appendChild(circele)
}
}
createMultipleCircle('.container',5,400,'green')


