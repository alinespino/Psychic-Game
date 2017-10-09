

$(document).ready (function () {




// ( COMPUTER GUESSES ) //
//Create array of letters and select random letter// 


var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
 "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

 function newGame () {
 random = computerGuess[Math.floor(Math.random() * computerGuess.length)];
 console.log(random);
 lives = 9;
 guesses = [];

}

newGame();


// CREATE ID's TO KEEP SCORES
// create vars to insert scores // 

var wins = 0;
var losses = 0;



	document.onkeyup = function(event) {

	var userGuess = event.key.toLowerCase();
	console.log (userGuess);

	if (lives === 0){
		losses ++;
	
		newGame();
	}

	else {
		if (userGuess !== random) {
			lives --;
			guesses.push(userGuess);
		}
		else {
			wins ++;
		
			newGame();
		}
	}


var html =

" <div id='Wins'> <h3>Wins: " + wins + " </h3></div> " +
" <div id='Losses'> <h3>Losses: " + losses + " </h3></div> " +
"<div id='Lives'> <h3>Guesses Left: " + lives + "</h3></div>" +
"<div id='Guesses'> <h3>Your Guesses so far: "+ guesses + "</h3></div>"

document.getElementById ("score").innerHTML=html;


};
});


// WINS // 
// If user clicks on computer guess +1 // 
//Reset counter if win.



// LOSSES //
// Once Guesses left goes to 0 then +1 // 



//GUESSES LEFT // (LIVES)
//Start counter on 9 IF letter not guessed do -1 // 
//Reset counter if 0 lives left



// GUESSES SO FAR // 
//Show letters clicked by user//
//Reset if Wins +1 or losses + 1  

//SHOW IN HTML//





