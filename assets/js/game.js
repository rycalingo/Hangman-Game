var hangman = {

	wordList: [
				"alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india",
				"juliet","kilo","lima","mike","november","oscar","papa","quebec","romeo",
				"sierra","tango","uniform","victory","whiskey","xray","yankee","zulu"
				],

	secretWord: "",

	numGuess: 0,

	startGame: function() {

		var startGame = document.onkeyup = function(event) {
			if (hangman.numGuess === 0) {
				
				hangman.numGuess = 10;
				return hangman.resetGame();
			}
		}

	},

	resetGame: function() {

		var n = Math.floor(Math.random() * this.wordList.length);
		this.secretWord = this.wordList[n];
		this.secretWord = this.secretWord.toUpperCase();

		$("#numGuess").text(this.numGuess);

		console.log(this.secretWord);
		var theWord = "";
		for(var i = 0; i < this.secretWord.length; i++ ) {
			theWord += "_";
		}
		$("#letterBoard").text(theWord);
		$("#numGuess").text(this.numGuess);
		$("#lettersUsed").text("");

		return this.runGame();
	},

	runGame: function() {
		
		var isAChar = /^[a-z]$/i;
		var playChar = document.onkeyup = function(event){
			//console.log(event.which);
			var char = String.fromCharCode(event.which);
			//console.log(char);
			// console.log(char + " = " + char.length);
			char = isAChar.test(char) ? char : false;

			var shownWord = $("#letterBoard").text();
			var usedChar = $("#lettersUsed").text();
			var tempStr = "";
			//console.log(shownWord);

			if (char) {

				// if (char) is not in #letterBoard and #lettersUsed
				if ( shownWord.indexOf(char) === -1 && usedChar.indexOf(char) === -1 ) {

					// if (char) is in secretWord
					if ( hangman.secretWord.indexOf(char) > -1 ) {

						for(var i = 0; i < hangman.secretWord.length; i++ ) {
							if ( char === hangman.secretWord.charAt(i) ) {
								// add char to tempStr
								tempStr += char; 
							}else {
								// else add shownWord letter
								tempStr += shownWord.charAt(i);
							}
						}
						// display tempStr to #letterBoard
						$("#letterBoard").text(tempStr);

						if (tempStr.indexOf("_") === -1 ) {
							hangman.numGuess = 0;
							alert("You WIN!");
						}
						console.log(hangman.numGuess);
					}else {
						//wrong letter
						// add letter to already used letters
						usedChar = usedChar.length > 0 ? usedChar + ", " + char : char;
						$("#lettersUsed").text(usedChar);
						// minus one turn
						if ( hangman.numGuess !== 0 ) {
							hangman.numGuess--;
							$("#numGuess").text(hangman.numGuess);
						}
					}
				}// else do nothing
			}
		};

	}

};
hangman.startGame();