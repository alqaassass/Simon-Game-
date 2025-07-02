// i need to identify some varybles 
// i need to identify some storages
// i need to identify some functions 

let gameSequence = []
let playerSequence = []
let temp = []
let level = 0 
const Randomm= Math.floor(Math.random() * 4);


const cellsEl = document.querySelectorAll('.cell')
cellsEl.forEach((cell) => {
    cell.addEventListener('click', () => handleClick(cell.id));
})

const initiate = () => {
    playerSequence = []
    level = 0
    assignToCell()
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


    placePiece(cellsIndex)
}

const placePiece = (index) => {
    playerSequence[index] = gameSequence
}


initiate()


