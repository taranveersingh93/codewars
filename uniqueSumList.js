/* SUM A LIST BUT IGNORE ANY DUPLICATES
https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
Please write a function that sums a list, but ignores any 
duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function 
should return 10.
*/
function sumNoDuplicates(numList) {
   var testObject = {};
   var sumArray = [];
   for(var i=0; i<numList.length; i++) {
    if(testObject[numList[i]]) {
        testObject[numList[i]] = testObject[numList[i]]+1;
     } else {
        testObject[numList[i]] = 1
     }
    }

   for(var i=0; i < numList.length; i++) {
    if (testObject[numList[i]] === 1) {
    
        sumArray.push(numList[i]);
    } 
    
    
   }
   sumArray = sumArray.reduce((a,b) => a+b, 0);
    return sumArray; 
   }
  array = [2,2,3,3,1,1,5];
  console.log((sumNoDuplicates(array)));
