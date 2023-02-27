/*
INDEXED CAPITALISATION
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
Given a string and an array of integers representing indices, capitalize all letters at the given 
indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!
*/
function capitalize(stringtest,arr){
    var newString = stringtest.split("");
    for(i=0; i<arr.length; i++) {
      if(newString[arr[i]])
        newString[arr[i]] = newString[arr[i]].toUpperCase();
    };
   return newString.join("");
  };