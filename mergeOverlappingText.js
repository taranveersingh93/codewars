/* MERGE OVERLAPPING STRINGS
https://www.codewars.com/kata/61c78b57ee4be50035d28d42
This kata requires you to write a function which merges two strings together. 
It does so by merging the end of the first string with the start of the second string
 together when they are an exact match.

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"



*/
function mergeStrings(first, second){
    var outputArray = [];
    var firstArray = first.split("");
    console.log(`first ${first}`);
    console.log(`second ${second}`);
    for(i=0; i<firstArray.length; i++) {
        outputArray.push(firstArray[i]);
    }
   console.log(`initial outputarray ${outputArray}`);
   var overlap = false;
   for (i=second.length-1; i>=0;i--) {
    if(first!== second && first.endsWith(second.slice(0,i)) && i!==0 || first===second) {
        overlap = true;
        break;
    }
   } 
   console.log(`2 outputarray ${outputArray}`);
   if (overlap===false) {
    outputArray.push(second);
    console.log(`3 outputarray ${outputArray}`);
   } else{
    for(i=second.length-1; i>=0; i--) {
        if(first!== second && first.endsWith(second.slice(0,i)) && i!==0) {
            console.log("condition met");
            console.log(`second split ${second.slice(i, second.length)}`);
            outputArray.push(second.slice(i,second.length))
            break;
         }  
    }
   }
   return outputArray.join("");
}
console.log(mergeStrings("abc", "abc"));