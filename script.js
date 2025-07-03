// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 

let gameSequence = []
let playerSequence = []
let temp = []
let level = 1 
const Randomm= Math.floor(Math.random() * 4);


const cellsEl = document.querySelectorAll('.cell')
cellsEl.forEach((cell) => {
    cell.addEventListener('click', () => handleClick(cell.id));
})

const initiate = () => {
    playerSequence = []
    level = 0
    assignToCell()
    nextLevel()
    
}

const assignToCell = () => {
    gameSequence.push(Randomm)
    console.log(gameSequence)

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

    if(playerSequence === gameSequence){
        
        nextLevel()
    }


    placePiece(cellsIndex)
}

const placePiece = (index) => {
    playerSequence[index] = gameSequence
}


const checkIfCorrect = () => {
    if (playerSequence.length === gameSequence.length) {

    }

}

const nextLevel = () => {
    level += 1
    const Randommm= Math.floor(Math.random() * 4);
    gameSequence.push(Randommm)
    console.log(gameSequence)
    console.log(level)
}


initiate()


