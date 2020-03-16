var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];



var player2_Button = document.getElementById('player-2');
let player1 = ["proGrad", 0, 1000]
let player2 = ["FacePrep", 0, 1000]

//console.log(player1_Button)

window.onload = function () {
    var player1_Button = document.getElementById('player-1');
    player1_Button.addEventListener('click', rollDice_1)
}



function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one rolls", position)
    changePosition_1(player1[1], position)
}

function changePosition_1(old, currentPosition) {
    var newPosition = old + currentPosition
    player1[1] = newPosition
    console.log(player1[1])
    updateMoney_1(player1[1])
}

function updateMoney_1(p1) {
    var updateMoney = 0
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1]
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1]
    }
    player1[1] = updateMoney;
    console.log("player-1 money", player1[1])

}