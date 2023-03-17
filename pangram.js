/*
Detect Pangram
https://www.codewars.com/kata/545cedaa9943f7fe7b000048
A pangram is a sentence that contains every single letter of the alphabet at 
least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, 
False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    console.log(`raw string is ${string}`);
    var stringNew = string.replace(/[\W]/g, "");
    stringNew = stringNew.replace(/[0-9]/g, "");
    stringNew = stringNew.replace(/ /g, "");
    console.log(`after removing unrequired characters ${stringNew}`);

    var stringArray = stringNew.split(""); //make string into an array
    var lowercaseArray = stringArray.map(x=> x.toLowerCase()); //make a new array as a copy with only lowercase
    var indexArray = []; //empty array to be used for final evaluation
    for(var i=0; i<lowercaseArray.length; i++) { 
        if(indexArray.includes(lowercaseArray[i])===false) { 
            indexArray.push(lowercaseArray[i]); //if indexarray does NOT contain the alphabet push the alphabet to indexarray
        }
    }
    if(indexArray.length ===26) { //a pangram woould have 26 elements in the indexarray
        return true;
    } else {
        return false;
    }
    
}