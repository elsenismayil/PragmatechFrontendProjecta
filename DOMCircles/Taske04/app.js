function randomCirclePlacement() {
    let div = document.createElement('div')
    div.style.width = '10px'
    div.style.height='10px'
    div.style.borderRadius ='50%'
    div.style.backgroundColor = 'red'
    let body = document.querySelector('body')
    body.appendChild(div)
    let topu = Math.floor(Math.random()*1500)
    let left = Math.floor(Math.random()*800)
    div.style.marginLeft = `${left}px`
    div.style.marginTop =`${topu}px`
}
randomCirclePlacement()
