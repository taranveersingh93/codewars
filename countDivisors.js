/* Count the divisors of a number
https://www.codewars.com/kata/542c0f198e077084c0000c2e/javascript
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. 
The numbers between parentheses are shown only for you to see which
 numbers are counted in each case.
 */
 function getDivisorsCnt(n){
    var divArray = [];
    for(var i=1; i<=500000; i++) {
        if(i>n) {
            break;
        } else if(n%i===0) {
            divArray.push(i);            
        }
    }
    return divArray.length;
}

