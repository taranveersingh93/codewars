/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
*/
function squareSum(array) {
    for(i=0; i<array.length; i++) {
        array[i] = array[i]*array[i];
    }
  return array.reduce((a,b)=>a+b, 0); 
}

