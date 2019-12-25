let gameStarted = false; 
let startingCash;
getStartingCash();

function getStartingCash(){
startingCash = Number(prompt('How many dollars would you like to bet?'));
if(!startingCash){
    alert('error: you must enter an amount greater than $0'); 
    console.error('error: you must enter an amount greater than $0');
    getStartingCash();
} else {// update innerHTML of dollar elemetn in box 
    document.getElementById('startingCash').innerHTML=startingCash;
}
}


const play = document.getElementById('play')
play.addEventListener('click', event => {
    document.getElementById('gameStarted').style='display:block'; 
    document.getElementById('newBet').style='display:block'; 
  rollDice(startingCash);
  event.preventDefault();
});
 
const newBet = document.getElementById('newBet')
newBet.addEventListener('click', event => {
    getStartingCash();
  event.preventDefault();
});
    



function rollDice(gameMoney){
let startingCash = gameMoney;
let dice=[1,2,3,4,5,6];
let counter = 0; 
let highestEarned = [0,gameMoney];

while(gameMoney>0){
    if((dice[Math.round(Math.random()*6)] + dice[Math.round(Math.random()*6)]) ===7){
        gameMoney=gameMoney+4;
        counter++;
        if(gameMoney>highestEarned[1]){
            highestEarned=[counter,gameMoney];
        }
    } else {
        gameMoney--;
        counter++; 
}
}
document.getElementById('startingBet').innerHTML='$'+startingCash;
document.getElementById('totalRolls').innerHTML=counter;
document.getElementById('highestWon').innerHTML='$'+highestEarned[1];
document.getElementById('highestRollCount').innerHTML=highestEarned[0];
}

