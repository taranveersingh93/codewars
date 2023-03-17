/* Vowel Remover

https://www.codewars.com/kata/5547929140907378f9000039/javascript
Create a function called shortcut to remove the lowercase vowels 
(a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
*/
function shortcut (string) {
    var stringArray = string.split("");
    var outputArray = [];
    for (var i=0; i<stringArray.length; i++) {
        if(stringArray[i] !== "a" && stringArray[i] !== "e" && stringArray[i] !== "i" && stringArray[i]!=="o" && stringArray[i]!=="u") {
            outputArray.push(stringArray[i]);
        }
    }
    return outputArray.join("");
}