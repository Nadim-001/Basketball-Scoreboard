// let home1 = document.getElementById("home-el1")
// let home2 = document.getElementById("home-el2")
// let home3 = document.getElementById("home-el3")

// let away1 = document.getElementById("away-el1")
// let away2 = document.getElementById("away-el2")
// let away3 = document.getElementById("away-el3")
let homeDisplay = document.getElementById("home-score")
let awayDisplay = document.getElementById("away-score")

let homeScore = 0
let awayScore = 0

function add(team, score) {
    if (team=="home") {
        homeScore += score
        homeDisplay.textContent = homeScore
    } else {
        awayScore += score
        awayDisplay.textContent = awayScore
    }
}

function newGame() {
    homeScore = 0
    awayScore = 0
    homeDisplay.textContent = "0"
    awayDisplay.textContent = "0"
}