/* Sum of odd numbers 
https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/javascript
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
 e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
    var apArray = []; //the left most items of the triangle are differentiated by an increasing arithmetic progression
    // 1 => 1+2 => 1+4 => 1+6 and so on
    // so we first make an array of this AP and find its sum. Once we have the sum, we can find the first term
    // of the nth row. 
    for(var i=1; i<=n-1; i++) { 
        apArray.push(2*i);
    }
    var sumOfapArray = apArray.reduce((a,b)=>a+b,0);
	var firstTerm = 1+sumOfapArray;
    //now that we have the first term of the nth row, we just need to add "2" to each term "n" times and return the sum. 
    var finalArray = [];
    for(var i=0; i<n; i++) {
        finalArray.push(firstTerm + 2*i);
    }
    var sumFinalArray = finalArray.reduce((a,b)=>a+b,0);
    return sumFinalArray;
}