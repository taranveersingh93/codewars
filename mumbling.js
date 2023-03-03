/* MUMBLING
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
    sArray = s.split("");
    newArray = [];
    for(i=0; i<sArray.length; i++) {
        var firstChar = sArray[i].toUpperCase();
        var secondChar = sArray[i].toLowerCase();
        var remainingWord = secondChar.repeat(i);
        var finalWord = firstChar + remainingWord;
        newArray.push(finalWord);
    }
    return newArray.join("-");
}