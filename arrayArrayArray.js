/* ARRAY ARRAY ARRAY
https://www.codewars.com/kata/57eb936de1051801d500008a
You are given an initial 2-value array (x). 
You will use this to calculate a score.

If both values in (x) are numbers, the score is 
the sum of the two. If only one is a number, 
the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays.
 Each sub array will be the same as (x) and the number of sub 
 arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3],
 ['a', 3]].
*/

function explode(x){
    var element1 = x[0];
    var element2 = x[1];
    var resultArray = []; //our final array of arrays. initialized to be empty
    if(typeof element1 === 'number' && typeof element2 === 'number') { //both elements number
        var score = element1 + element2; 
        for(var i=0; i<score; i++) { //since our resultArray needs to be populated with "n" (times score) 
            resultArray.push(x);
        }
        return resultArray;
    } else if(typeof element1 === 'number' && typeof element2 != 'number') {
        var score = element1;
        for(var i=0; i<score; i++) {
            resultArray.push(x);
        }
        return resultArray;
    } else if(typeof element2 === 'number' && typeof element1 != 'number') {
        var score = element2;
        for(var i=0; i<score; i++) {
            resultArray.push(x);
        }
        return resultArray;
        
    } else {
        return 'Void!';
    }

}