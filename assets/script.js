const body = document.querySelector('body')
const div = document.createElement('div')
div.id = 'box'

const img = document.createElement('img')
img.src = './assets/img/dory-direita.png'

div.appendChild(img)
body.appendChild(div)

let vertical = 200
let horizontal = 0

document.addEventListener('keydown', event => {
  const keyEvent = event.key
  console.log(keyEvent)
  console.log(event)

  if (keyEvent === 'ArrowDown') {
    vertical += 10
  }

  if (keyEvent === 'ArrowUp') {
    vertical -= 10
  }

  if (keyEvent === 'ArrowRight') {
    img.src = './assets/img/dory-direita.png'
    div.appendChild(img)
    horizontal += 10
  }

  if (keyEvent === 'ArrowLeft') {
    img.src = './assets/img/dory-esquerda.png'
    div.appendChild(img)
    horizontal -= 10
  }

  document.getElementById('box').style.top = vertical + 'px'
  document.getElementById('box').style.left = horizontal + 'px'
})

document.addEventListener('click', event => {
  const keyEvent = event.path[0].id

  if (keyEvent === 'bottom') {
    vertical += 10
  }

  if (keyEvent === 'top') {
    vertical -= 10
  }

  if (keyEvent === 'right') {
    img.src = './assets/img/dory-direita.png'
    div.appendChild(img)
    horizontal += 10
  }

  if (keyEvent === 'left') {
    img.src = './assets/img/dory-esquerda.png'
    div.appendChild(img)
    horizontal -= 10
  }

  document.getElementById('box').style.top = vertical + 'px'
  document.getElementById('box').style.left = horizontal + 'px'
})
