// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.


function removeFirstOccurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}

console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));