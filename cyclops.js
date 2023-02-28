/* CYCLOPS NUMBERS
https://www.codewars.com/kata/56b0bc0826814364a800005a/train/javascript
A cyclops number is a number in binary that is made up of all 1's, with one 0 in 
the exact middle. That means all cyclops numbers must have an odd number of digits 
for there to be an exact middle.
A couple examples:
101
11111111011111111
You must take an input, n, that will be in decimal format (base 10), 
then return True if that number wil be a cyclops number when converted to binary, 
or False if it won't.
Assume n will be a positive integer.

A test cases with the process shown:

cyclops (5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle, 101 is
 a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False
n will always be > 0.
*/

function cyclops(n) {
    console.log(`n is ${n}`); 
    var binaryString = n.toString(2);
    console.log(`binarystring is ${binaryString}`);
    console.log(`binarytring length is ${binaryString.length}`);
    var binaryNum = Number(binaryString);
    console.log(`binarynum is ${binaryNum}`);
    var binaryMid = Number(binaryString[Math.floor(binaryString.length/2)]);
    console.log(`binarymid is ${binaryMid}`);
    var binaryArray = binaryString.split('0');
    console.log(`binary array is ${binaryArray}`)
    var binaryHalf = (binaryArray[0]);
    console.log(`binary half is ${binaryHalf}`);
    console.log(`values compares are ${binaryArray[0]} and ${binaryArray[1]}`);

    if (binaryString.length%2===0) {
      return false;
    }
    else if(binaryMid===0 && binaryArray[0]=== binaryArray[1]) {
      for(var i=0; i<binaryHalf.length; i++) {
          if(binaryHalf[i]==="1") {
            return true;
          }
        }  
    } else {
      return false;
    } 
  }
console.log(cyclops(42));
