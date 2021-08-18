const fs = require('fs');
var fil = fs.readFileSync('text.txt','utf-8');
console.log(WordCounter(fil))

function WordCounter (str) {
	var words = str.split(" ").length;
	return words;
}
