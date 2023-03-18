/* Find nearest square number
https://www.codewars.com/kata/5a805d8cafa10f8b930005ba
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), 
of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, 
since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), 
you need to just return n.

Good luck :)
*/

function nearestSq(n){
    if(Number.isInteger(Math.sqrt(n))===true) {
        return n;
    } else {
        var root = Math.sqrt(n);
        var low = Math.floor(root);
        var high = Math.ceil(root);
        var lowSquare = low*low;
        var highSquare = high*high;
        if(n-lowSquare<highSquare-n) {
            return lowSquare;
        } else {
            return highSquare;
        }
    }
}

