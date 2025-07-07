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
    for( let i = 0 ; i < gameSequence.length ; i++ ){
        let color = gameSequence[i]
        switch (color){
            case 0 : 
                color = "red"
                break;
            case 1 : 
                color = "green"
                break;
            case 2 : 
                color = "blue"
                break;
            case 3 : 
                color = "yellow"
                break;
            default :
                color = "noColor"
        }

        cellsEl.classList.add(color)
        setTimeout(1000)
        cellsEl.classList.remove(color)

    }
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
    const cellsIndex = events.target.id
    const cell = cellsEl[cellsIndex]

    playerSequence.push(parseInt(cellsIndex))

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
