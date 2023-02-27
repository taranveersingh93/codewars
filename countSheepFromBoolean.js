/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  */
  function countSheeps(arrayOfSheep) {
    var counter = 0;
    for (i=0; i<arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]===true) {
        counter = counter+1;
      }
    }
    return counter;
  }
