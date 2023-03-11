/* Isograms
https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str){
    var isogram = true; 
    var strArray = str.split("");
    var strLowerArray = strArray.map(x => x.toLowerCase());

    for(var i=0; i<strLowerArray.length; i++) {
        if(i===strLowerArray.length-1) {
            break;
        } else if(strLowerArray.slice(i+1,strLowerArray.length).includes(strLowerArray[i])) {
            isogram = false;
            break;
        }
    }
    return isogram;
  }