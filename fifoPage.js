/*
Page replacement algorithms: FIFO
https://www.codewars.com/kata/62d34faad32b8c002a17d6d9
In a computer operating system that uses paging for virtual memory management, 
page replacement algorithms decide which memory pages to page out when a page of 
memory needs to be allocated. Page replacement happens when a requested page is 
not in memory (page fault) and a free page cannot be used to satisfy the allocation, 
either because there are none, or because the number of free pages is lower than some threshold.

The FIFO page replacement algorithm
The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm 
that requires little bookkeeping on the part of the operating system. The idea is 
obvious from the name: the operating system keeps track of all the pages in memory 
in a queue, with the most recent arrival at the back, and the oldest arrival in front. 
When a page needs to be replaced, the oldest page is selected. Note that a page already
 in the queue is not pushed at the end of the queue if it is referenced again.

Your task is to implement this algorithm. The fifo function will take two parameters 
as input: the number of maximum pages that can be kept in memory at the same 
time n and a reference list containing numbers. Every number represents a page 
request for a specific page (you can see this number as the unique ID of a page).
 The expected output is the status of the memory after the application of the algorithm. 
 Note that when a page is inserted in the memory, it stays at the same position until it
  is removed from the memory by a page fault.

Example:
Given:

N = 3,
REFERENCE LIST = [1, 2, 3, 4, 2, 5],
  * 1 is read, page fault --> memory = [1];
  * 2 is read, page fault --> memory = [1, 2];
  * 3 is read, page fault --> memory = [1, 2, 3];
  * 4 is read, page fault --> memory = [4, 2, 3];
  * 2 is read, already in memory, nothing happens;
  * 5 is read, page fault --> memory = [4, 5, 3].
So, at the end we have the list [4, 5, 3], which is what you have to return.
 If not all the slots in the memory get occupied after applying the algorithm,
  fill the remaining slots (at the end of the list) with -1 to represent emptyness
   (note that the IDs will always be >= 1).

 
 - make an empty outputarray and an empty temparray
 - loop (if outputArray.length < n; freely push unique elements from referencelist to outputarray). 
 - if outputarray is still shorter than n. push -1 until length = n
 - loop through input array. if outputarray length = 0; push all elements of temparray to outputarray
 else if element does not exist in the outputarray, outputarray.shift  and temparrayArray.push. 
 -
 - 
   
*/

function fifo(n, referenceList) {
  console.log(`n ${n}`);
  console.log(`referencelist ${referenceList}`);

  var outputArray = [];
  var tempArray = [];


  for(var i=0; i<referenceList.length; i++) { //push "n" unique referencelist elements to outputarray
    if(outputArray.length < n && outputArray.includes(referenceList[i])===false) {
      outputArray.push(referenceList[i]);
    }
  }
  console.log(`1 outputarray ${outputArray}`); //print initial outputarray
  console.log(`1 temparray ${tempArray}`); //print initial temparray
  if (outputArray.length < n) { //if after the initial filling of elements, outputarray still has
    //less elements than "n", push -1
    for(var i = outputArray.length; i < n; i++) {
      outputArray.push(-1);
    }
  }
  console.log(`3 outputarray ${outputArray}`); // print output array once again just for troubleshooting
  for(var i=0; i<referenceList.length; i++) {
    console.log("loop")
    console.log(`initial outputarray ${outputArray}`);
    console.log(`initial temparray ${tempArray}`);
    console.log(`loop element = ${referenceList[i]}`) //some basic prints for efficient troubleshooting
    console.log("---");

    //since pages(elements) can't shift their positions inside the array, I am using 2 different arrays,
    //temparray will be used for .push (add item at the end), outputarray will be used for .shift (remove item from beginning)
    //For better human understanding, read the code on line (98) first. 
    //if element isn't in temparray and outputarray, we push it to temparray at the end and remove the first element
    //from outputarray. 
    // now read the if condition on line (90) once all elements from outputarray are removed, we clone the temparray to
    //outputarray and remove all elements from temparray. 
    //an additional if statement is added to take care of a test case. 
    if(outputArray.length===0 && tempArray.includes(referenceList[i])===false) { 
      outputArray = [...tempArray];
      tempArray = [];
      tempArray.push(referenceList[i]); 
      if(outputArray.length+tempArray.length>n) {
        outputArray.shift();
      }

    } else if(outputArray.includes(referenceList[i])===false && tempArray.includes(referenceList[i])===false) {
      outputArray.shift();
      tempArray.push(referenceList[i]);
    }

  } 
  console.log(`final tempArray ${tempArray}`);
  console.log(`final outputarray ${outputArray}`);

  return tempArray.concat(outputArray);
}
console.log(fifo(6, [22,9,12,20,2,12,24,8,11,6,20,3,8,7,18,6,11,3,14,13,1,8,13,23,22,23]));
