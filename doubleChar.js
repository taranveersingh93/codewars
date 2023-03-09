/* 
Double Char
https://www.codewars.com/kata/56b1f01c247c01db92000076/javascript
Given a string, you have to return a string in which each character (case-sensitive) 
is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/
function doubleChar(str) {
    var strArray = str.split("");
    var outputArray = [];
    for(var i=0; i<strArray.length; i++) {
        outputArray.push(strArray[i]);
        outputArray.push(strArray[i]);
    }
    console.log(outputArray);
    return outputArray.join("");    
}
  console.log(doubleChar("Hello"));