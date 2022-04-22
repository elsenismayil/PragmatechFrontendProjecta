// function createPoolTable() {
//     // 1-i ağ 1-i qara 7-si mavi 7-si qırmızı olmaqla ümümilikdə 16 bilyard topu yaradın
//     // ağ dairə xaricində geri qalan topların daxilində nömrələri yazılacaq
//     // bilyard masasI görüntüsü üçün [link](https://upload.wikimedia.org/wikipedia/commons/5/5e/American-style_pool_table_diagram_%28empty%29.png)-dəki arxafon şəklindən istifadə edin.
//     // yaradılan toplar random olaraq görüntüsü verilən bilyard masası üzərində random yerlərdə yerləşməlidir.
//   }

// White Area
let ranL = Math.floor(Math.random() * 1400)
let ranT = Math.floor(Math.random() * 750)
let ag = document.createElement('div')
ag.className = 'ag'
ag.style.width = '50px'
ag.style.height = '50px'
ag.style.backgroundColor = 'white'
ag.style.borderRadius = '50%'
ag.style.display = 'flex'
ag.style.position = 'absolute'
ag.style.marginLeft = `${ranL}px`
ag.style.marginTop = `${ranT}px`
let picture = document.querySelector('.picture')
picture.appendChild(ag)
// Black Area
let black = document.createElement('div')
black.className = 'black'
black.style.width = '50px'
black.style.height = '50px'
black.style.backgroundColor = 'black'
black.style.borderRadius = '50%'
black.style.display = 'flex'
black.style.justifyContent = 'center'
black.style.alignItems = 'center'
black.style.position = 'absolute'
let pb = document.createElement('p')
pb.style.fontSize = '30px'
pb.style.color = 'white'
pb.innerText = '1'
black.appendChild(pb)
black.style.left = `${Math.floor(Math.random() * 1400)}px`
black.style.top = `${Math.floor(Math.random() * 750)}px`
picture.appendChild(black)
// Blue area
for (let i = 1; i < 8; i++) {
  let blue = document.createElement('div')
  blue.className = 'blue'
  blue.style.width = '50px'
  blue.style.height = '50px'
  blue.style.borderRadius = '50%'
  blue.style.left = `${Math.floor(Math.random() * 1400)}px`
  blue.style.top = `${Math.floor(Math.random() * 750)}px`
  blue.style.display = 'flex'
  blue.style.justifyContent = 'center'
  blue.style.alignItems = 'center'
  blue.style.backgroundColor = 'blue'
  blue.style.margin = '5px'
  let p = document.createElement('p')
  p.style.fontSize = '30px'
  p.style.color = 'white'
  p.innerText = `${i + 1}`
  blue.appendChild(p)
  picture.appendChild(blue)
}
// Red Area
for (let j = 7; j < 14; j++) {
  let red = document.createElement('div')
  red.className = 'red'
  red.style.width = '50px'
  red.style.height = '50px'
  red.style.marginLeft = '400px'
  red.style.borderRadius = '50%'
  red.style.display = 'flex'
  red.style.justifyContent = 'center'
  red.style.alignItems = 'center'
  red.style.left = `${Math.floor(Math.random() * 1400)}px`
  red.style.top = `${Math.floor(Math.random() * 750)}px`
  red.style.position = 'absolute'

  let pT = document.createElement('p')
  pT.style.fontSize = '30px'
  pT.style.color = 'white'
  pT.innerText = `${j + 1}`
  red.appendChild(pT)
  red.style.backgroundColor = 'red'
  red.style.margin = '5px'
  picture.appendChild(red)
}

