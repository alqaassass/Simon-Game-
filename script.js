// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 
let colors = ['red', 'green', 'blue', 'yellow' ]
let gameSequence = []
let playerSequence = []
let level = 1 
let canClick = false
let highScore = 0


const initiate = () => {
  level = 1
  document.getElementById("titlee").textContent = "Simon Game"
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
    },i * 1000)
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
      setTimeout(() => {
        nextLevel()
      },1500)
    }
}

const nextLevel = () => {
    level ++
    document.getElementById("score").textContent = "Score: " + (level-1)
    if ( level-1 >= highScore ){
      highScore = level-1
      document.getElementById("highScore").textContent = "Highest Score: " + (level-1)
    }
    const randomColor = colors[Math.floor(Math.random() * 4)]
    gameSequence.push(randomColor)
    playerSequence = [];
    displayToPlayer()
    
}

const gameOver = () =>{
    document.getElementById("titlee").textContent = "Game Over"
    level = 1
    gameSequence = []
    playerSequence = []
    document.getElementById("score").textContent = "Score: 0"

    setTimeout(() => {
      initiate()
    },2000)
}


const flashCell = (color) => {
  const cell = document.getElementById(`${color}`)
  cell.style.opacity = 0.5

  setTimeout(() => {
    cell.style.opacity = 1
  }, 500)
}

const cellsEl = document.querySelectorAll('.cell')

cellsEl.forEach((cell) => {
    cell.addEventListener('click', () => handleClick(cell.id));
})

initiate()