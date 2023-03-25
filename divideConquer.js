/* 
Divide and conquer
https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

Given a mixed array of number and string representations of integers, 
add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
function divCon(x){
    var numArray = [];
    var stringArray = [];
  for(var i=0; i<x.length; i++) {
    console.log(typeof x[i])
    if(typeof x[i] === "number") {
        numArray.push(x[i]);
    } else {
        stringArray.push(Number(x[i]));
    }
  }
  console.log(`numarray ${numArray}`);
  console.log(`stringArray ${stringArray}`)
  sumNum = numArray.reduce((a,b)=>a+b,0);
  stringNum = stringArray.reduce((a,b)=>a+b,0);
  return sumNum-stringNum;
}
