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
  gameSequence = []
  playerSequence = []
  // console.log("test initiate") // checked 
  nextLevel()
}

const displayToPlayer = () => {
  canClick = false
  // console.log("test displayToPlayer") // checked
  for (let i = 0; i < gameSequence.length; i++) {
    const color = gameSequence[i]
    // console.log(color) // checked
    // setTimeout(() => {
    //   flashCell(color)
    // },1000)
    // console.log(color)
    // console.log(color)
    flashCell(color)
    
    // let x = document.getElementById(color)
    // x.style.opacity = 0.5
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
    console.log(events)
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
    // console.log(level) // checked

    const randomColor = colors[Math.floor(Math.random() * 4)]
    gameSequence.push(randomColor)
    playerSequence = [];
    // console.log(gameSequence) // checked
    // console.log(playerSequence) // checked
    displayToPlayer()
}

const gameOver = () =>{
    alert("Game Over")
    level = 1
    gameSequence = []
    playerSequence = []
    document.getElementById("score").textContent = "Score: 0"
}


const flashCell = (color) => {
  console.log("test flashCell " + color)
  const cell = document.getElementById(`${color}`)//.style.opacity = 0.5

  console.log(cell)

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

