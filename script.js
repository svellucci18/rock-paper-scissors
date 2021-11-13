var wins = 0;
var losses = 0;
var ties = 0;
var computerChoices = [ "R" , "P" , "S" ];

var userChoice = "";
var computerChoice = "";


game();

function game() {

    userChoice = prompt("Rock, Paper, or Scissors");

    console.log(userChoice);

    var indexPointer = Math.floor( Math.random() * computerChoices.length);
    computerChoice = computerChoices[indexPointer];

    alert("Computer chooses: "+computerChoice);
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        alert("TIE");
        ties+=1;
        alert("Wins:"+wins+" Losses:"+losses+" Ties: "+ties);
        return game()
    } else if (userChoice === "R" && computerChoice === "S"){
        alert("WIN");
        wins +=1;
        alert("Wins:"+wins+" Losses:"+losses+" Ties: "+ties);
        return game()
    } else if (userChoice === "S" && computerChoice === "P"){
        alert("WIN");
        wins +=1;
        alert("Wins:"+wins+" Losses:"+losses+" Ties: "+ties);
        return game()
    } else if (userChoice === "P" && computerChoice === "R"){
        alert("WIN");
        wins +=1;
        alert("Wins:"+wins+" Losses:"+losses+" Ties: "+ties);
        return game()
    } else {
        alert ("LOSS");
        losses +=1;
        alert("Wins:"+wins+" Losses:"+losses+" Ties: "+ties);
        return game()
    }

    
}
