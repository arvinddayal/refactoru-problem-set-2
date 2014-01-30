var myArr = "RefactorU";

//reverse a string
var firstReverse = function(str) {
	return str.split("").reverse().join("");
};

//swapcase function
var swapCase = function(str) {
	var letter = str.split("");
	var swapLetter = [];
	for (var i=0; i<letter.length; i++) {
	if (letter[i] === letter[i].toUpperCase()) {
		swapLetter.push(letter[i].toLowerCase());
	}
	else if (letter[i] === letter[i].toLowerCase()) {
		swapLetter.push(letter[i].toUpperCase());
	}
	}
	return swapLetter.join("");
};

