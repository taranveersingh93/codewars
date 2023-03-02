/* FAKE BINARY
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
Given a string of digits, you should replace any digit below 5 with '0' and 
any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
    xArray = x.split("");
    for(var i=0; i<xArray.length; i++) {
        if(Number(xArray[i]) <5) {
            xArray[i] = "0"
        } else {
            xArray[i] = "1"
        }
    } 
    xArray = xArray.join("");
    return xArray;
}
