// const {playerName, chips} = playerDetails

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = prompt("Welcome on board! What's your Identity? 🐱‍🚀")
let playerDetails = {
    playerName: player,
    chips: 200
}



// Function to generate random number
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to render game
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true

        // Destructure the playerDetails object
        let {playerName, chips} = playerDetails
        playerEl.textContent = playerName + ": $" + chips
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

// Function to reset our game
function reset() {
    isAlive = false
    cards = []
    sum = 0
    playerEl.textContent = ""
    hasBlackJack = false
    renderGame()
}
