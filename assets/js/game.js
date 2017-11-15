var hangman = {

	wordList: [
				"alpha","bravo","charlie","delta","echo","foxtrot","golf","hotel","india",
				"juliet","kilo","lima","mike","november","oscar","papa","quebec","romeo",
				"sierra","tango","uniform","victor","whiskey","xray","yankee","zulu"
				],

	secretWord: "",

	turns: 10,

	startGame: function() {

		var n = Math.floor(Math.random() * this.wordList.length);
		this.secretWord = this.wordList[n];
		this.secretWord = this.secretWord.toUpperCase();
		console.log(this.secretWord);
		var theWord = "";
		for(var i = 0; i < this.secretWord.length; i++ ) {
			theWord += "_";
		}
		$("#letterBoard").html(theWord);

	},

	playersGuess: function() {

		var isAChar = /^[a-z]$/i;
		var guessChar = document.onkeyup = function(event){
			var char = String.fromCharCode(event.which);
			console.log(char);
			// console.log(char + " = " + char.length);
				char = isAChar.test(char) ? char : false;

			var shownWord = $("#letterBoard").text();
			var usedChar = $("#lettersUsed").text();
			var tempStr = "";
			console.log(shownWord);

			if (char) {

				if ( shownWord.indexOf(char) === -1 && usedChar.indexOf(char) === -1) { 

					//wrong letter
					// add letter to used letters

				} else {
					for(var i = 0; i < hangman.secretWord.length; i++ ) {
						if ( char === hangman.secretWord.charAt(i) ) {
							tempStr += char;
						}else {

							tempStr += shownWord.charAt(i);
							hangman.usedLetters += char;
						}
					}
					$("#letterBoard").text(tempStr);

				}else {
					hangman.usedLetters += char;
					$("#lettersUsed").text(hangman.usedLetters);
				}
			}
		}
		// var printlettersUsed = document.getElementByClassName("lettersUsed").innerHTML = this.usedLetters;
		// return guessChar;
	}

};
hangman.startGame();

hangman.playersGuess();