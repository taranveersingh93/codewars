/* Anagram detection
https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/
var isAnagram = function(test, original) {
    var array1 = test.split("");
    var array2 = original.split("");
    var array3 = array1.map(x => x.toLowerCase());
    console.log(`pre array3 ${array3}`);

    array3 = array3.sort();
  console.log(`array3 ${array3}`);
    var array4 = array2.map(x => x.toLowerCase());
      console.log(`pre array4 ${array4}`);

  array4 = array4.sort();
    console.log(`array4 ${array4}`);

    return array3.join("")===array4.join("");
};
