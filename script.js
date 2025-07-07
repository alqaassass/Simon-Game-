// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 
let colors = ['red', 'green', 'blue', 'yellow' ]
let gameSequence = []
let playerSequence = []
let level = 1 
let canClick = false

const initiate = () => {
  level = 1
  gameSequence = []
  playerSequence = []
  nextLevel()
}

const displayToPlayer = () => {
  canClick = false

  for (let i = 0; i < gameSequence.length; i++) {
    const color = gameSequence[i]
    
    setTimeout(() => {
      flashCell(color)
    }, i * 1000)
  }

  setTimeout(() => {
    canClick = true
  }, gameSequence.length * 1000)

}

const assignToCell = () => {
    let randomColor = colors[Math.floor(Math.random() * 4)]
    gameSequence.push(randomColor)
}

const updateGameSequence = () =>{
    cellsEl.forEach((cell, index) => {
        cell.textContent = playerSequence[index]
    })
    
}

const handleClick = (events) => {
    if ( !canClick ){
        return
    }

    playerSequence.push(events)
    flashCell(events)

    for (let i = 0; i < playerSequence.length; i++) {

        if (playerSequence[i] !== gameSequence[i]) {
            return gameOver()
        }
    }
    if (playerSequence.length === gameSequence.length) {
        nextLevel()
    }
}

const nextLevel = () => {
    level ++
    const randomColor = colors[Math.floor(Math.random() * 4)]
    gameSequence.push(randomColor)
    playerSequence = [];
    displayToPlayer()
}

const gameOver = () =>{
    alert("Game Over")
    level = 1
    gameSequence = []
    playerSequence = []
}


const flashCell = (color) => {
  const cell = document.getElementById(color)

  cell.classList.add('flash')

  setTimeout(() => {
    cell.classList.remove('flash')
  }, 1000)
}

const cellsEl = document.querySelectorAll('.cell')

cellsEl.forEach((cell) => {
    cell.addEventListener('click', () => handleClick(cell.id));
})

initiate()
