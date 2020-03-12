var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
console.log(board);
const player1_Button = document.getElementById('player-1');
const player2_Button = document.getElementById('player-2');
console.log(board.length);
console.log(player1_Button);
console.log(player2_Button);
player1_Button.addEventListener('click', rollDice_1);
player2_Button.addEventListener('click', rollDice_2);
//player array
var player1 = ["Naveen", 0, 1000];
var player2 = ["Preethi", 0, 1000];
//player-1 & player-2 rolling dice
function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player-1 rolls", position);
    changePosition_1(player1[1], position);
}

function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player-2 rolls", position);
    changePosition_2(player2[1], position);
}

//update positions of player-1 & player-2

function changePosition_1(old, currentPos) {
    var newPosition = old + currentPos;
    player1[1] = newPosition;
    console.log("player-1", player1[1]);
    updateMoney_1(player1[1]);
}

function changePosition_2(old, currentPos) {
    var newPosition = old + currentPos;
    player2[1] = newPosition;
    console.log("player-2", player2[1]);
    updateMoney_2(player2[1]);
}

//update money
function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length)
        updateMoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log("player1 Money:", updateMoney);
}

function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length)
        updateMoney = player2[2] - board[p2 - 1];
    else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log("player1 Money:", updateMoney);
}