/*
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, containing distinct letters - 
each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


function longest(s1, s2) {
    var s1Distinct = "";
    var s2Distinct = "";
    
    for(i=0; i<s1.length; i++) {
       if(s1Distinct.includes(s1.charAt(i))===false) {
        s1Distinct = s1Distinct+s1.charAt(i);
       } 
    }
    for(i=0; i<s2.length; i++) {
        if(s2Distinct.includes(s2.charAt(i))===false) {
         s2Distinct = s2Distinct+s2.charAt(i);
        } 
     }
    for(i=0; i<s2Distinct.length; i++) {
        if(s1Distinct.includes(s2Distinct.charAt(i))===false) {
            s1Distinct = s1Distinct+s2Distinct.charAt(i);
        }
    } 
    s1Distinct = s1Distinct.split("");
    s1Distinct = s1Distinct.sort();
    s1Distinct = s1Distinct.join("");
    return s1Distinct;

}
console.log(longest("taran", "anshu"));