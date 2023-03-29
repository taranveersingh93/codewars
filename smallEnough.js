/* Small enough? - Beginner
https://www.codewars.com/kata/57cc981a58da9e302a000214/javascript
You will be given an array and a limit value. You must check that all values in the array are below or 
equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/
function smallEnough(a, limit){
    var output = true;
    for(var i=0; i<a.length; i++) {
        if(a[i]>limit) {
            output = false;
            break;
        }
    }
    return output;
}
