/* IS THIS A TRIANGLE?

https://www.codewars.com/kata/56606694ec01347ce800001b/javascript
DESCRIPTION:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/
function isTriangle(a,b,c) {
    var sum = a+b+c;
    if(sum-a>a && sum-b>b && sum-c>c) {
        return true;
    } else {
        return false;
    }
}