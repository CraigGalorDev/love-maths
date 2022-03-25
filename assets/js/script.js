//console.log("Connected");
//wait for the Dom to finish loading before running the game
//Get the button elements and add listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked submit");
            }
            else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked +${gameType}`);
            }     
        });
    }
});
/**
 * the main game "loop" called when the script is first loaded
 * and afther the users answer has been processed
 */
function runGame(){
    let num1 = math.floor(math.random() *25) +1;
    let num2 = math.floor(math.random() *25) +1;
}

runGame();
function checkAnswer(){

} 
function calculateCorrectAnswer(){}  
function incrementScore(){}
function incrementWrongAnswer(){}
function displayAdditionQuestion(){}  
function displaySubtractQuestion(){} 
function displayMultiplyQuestion(){}  