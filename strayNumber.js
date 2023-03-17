/*
Find the stray number
https://www.codewars.com/kata/57f609022f4d534f05000024/javascript

You are given an odd-length array of integers, in which all of them are the same,
 except for one single number.

Complete the method which accepts such an array, and returns that single different
 number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
function stray(numbers) {
    var newArray= [];
    if(numbers[0]===numbers[1]) {
        for(var i=0; i<numbers.length; i++) {
            if(numbers[i]!==numbers[0]) {
                newArray.push(numbers[i]);
            }  
        }
    } else if(numbers[0]!== numbers[1] && numbers[0]===numbers[2]) {
        newArray.push(numbers[1]);
    } else {
        newArray.push(numbers[0]);
    }
    return newArray[0];
}