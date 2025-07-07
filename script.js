// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 

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
    
}

const assignToCell = () => {
    const Randomm = Math.floor(Math.random() * 4)
    gameSequence.push(Randomm)
}

const updateGameSequence = () =>{
    cellsEl.forEach((cell, index) => {
        cell.textContent = playerSequence[index]
    })
    
}

const handleClick = (events) => {
    const cellsIndex = events.target.id
    const cell = cellsEl[cellsIndex]

    playerSequence.push(cell)

    for (let i = 0; i < playerSequence.length; i++) {

        if (playerSequence[i] !== gameSequence[i]) {
            return gameOver()
        }
    }
    if (playerSequence.length === gameSequence.length) {
        nextLevel()
    }
    placePiece(cellsIndex)
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
