/*
SUM OF A SEQUENCE
https://www.codewars.com/kata/586f6741c66d18c22800010a/javascript
Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/
const sequenceSum = (begin, end, step) => {
    var array = [];
    console.log(` begin ${begin} end ${end} step ${step}`);
    for(var i=0; begin + (i*step)<=end; i++) {
      array.push(begin+(i*step));  
    } 

    console.log(array);
    if(array.length===0) {
        return 0;
    } else {
        return array.reduce((a,b)=>a+b);        
    }
    
};
console.log(sequenceSum(1,5,1));