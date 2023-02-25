/*
You are going to be given a word. Your job is to return the 
middle character of the word. If the word's length is odd, 
return the middle character. If the word's length is even, 
return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddle(s)
{
  var len = s.length;
  if (len%2===0) {
    var len1 = len/2;
    var len2 = len1-1;
    return s.charAt(len2)+s.charAt(len1);
  } else {
    var len1 = (len+1)/2;
    return s.charAt(len1-1);
  }
}