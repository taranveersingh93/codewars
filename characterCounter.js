/* EXES AND OHS
https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/ 
function XO(str) {
    var xCount = 0;
    var oCount = 0;
    for(i=0; i<str.length; i++) {
        if(str[i]==="x" || str[i]=== "X") {
            xCount = xCount+1;
        }
        if(str[i]==="o" || str[i]=== "O") {
            oCount = oCount + 1;
        }
    }
    return xCount===oCount;
}
