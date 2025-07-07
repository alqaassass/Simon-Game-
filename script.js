// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 
let colors = ['red', 'green', 'blue', 'yellow' ]
let gameSequence = []
let playerSequence = []
let level = 1 
let canClick = false



const cellsEl = document.querySelectorAll('.cell')

cellsEl.forEach((cell) => {
    cell.addEventListener('click', () => handleClick(cell.id));
})

const initiate = () => {
    playerSequence = []
    assignToCell()
    nextLevel()
    displayToPlayer()
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
    flashCell(id)

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
    const Randommm= Math.floor(Math.random() * 4)
    gameSequence.push(Randommm)
    console.log(gameSequence)
    console.log(level)
}

const gameOver = () =>{
    alert("Game Over")
    level = 1
    gameSequence = []
    playerSequence = []
}


initiate()
