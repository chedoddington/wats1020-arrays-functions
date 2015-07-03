// This is the file where you will write the Truncate Words function and related code.

// Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)
function truncateWords (longText, numWords) {
	// 1. Use the split() function to split the String into an Array
	var arrayOfText = longText.split(" ");
	// 2. Use the length attribut to find the number of words in the Array	
	var lengthOfArray = arraOfText.length;
	// 3. Determine how many words should be removed from the String
	var remainingWords = lengthOfArray - numWords;
	// 4. Remove those words from the Array
	var splicedArray = arrayOfText.splice(0, remainingWords);
	// 5. Add an additional String item to the Array to put an ellipses in: "..."	
	arrayOfText.push("...");
	// 6. Use the join() function to convert the Array back into a String
	var joinedText = arrayOfText.join(" ");
	// 7. Return the truncated String from the Function
	return joinedText;
}

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
