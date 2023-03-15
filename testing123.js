/*
Testing 1-2-3
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript
Your team is writing a fancy new text editor and you've been tasked with implementing
 the line numbering.

Write a function which takes a list of strings and returns each line prepended by 
the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in 
between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
var number=function(array){
    var outputArray = [];
    for(var i=0; i<array.length; i++) {
        outputArray.push(`${i+1}: ${array[i]}`)
    }
    return outputArray;
}
