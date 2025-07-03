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

const playSequence = () => {
  let i = 0
  const interval = setInterval(() => {
    const cellId = gameSequence[i]
    flashCell(cellId)
    for (let i = 0 ; i >= gameSequence.length ; i++){
        clearInterval(interval);
        canClick = true
    }
  }, 600)
}

const flashCell = (id) => {
  const cell = document.getElementById(id);
  cell.classList.add('flash');
  setTimeout(() => {
    cell.classList.remove('flash');
  }, 300); // how long it stays flashed
}


const handleClick = (events) => {
    const cellsIndex = events.target.id
    const cell = cellsEl[cellsIndex]

    playerSequence.push(cell)

    if(playerSequence !== gameSequence){
        
    }else{
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
    level ++
    const Randommm= Math.floor(Math.random() * 4);
    gameSequence.push(Randommm)
    console.log(gameSequence)
    console.log(level)
}

const gameOver = () =>{
    alert("Game Over")
    level = 0
    gameSequence = []
    playerSequence = []
}


initiate()


