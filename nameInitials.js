/*
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in 
between them.

The output should be two capital letters with a dot
 separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
function abbrevName(name){
   nameArray = name.split(" ");
   console.log(nameArray);
   name1 = nameArray[0];
   console.log(name1);
   name2 = nameArray[1];
   console.log(name2);
   upName1 = name1.toUpperCase();
   console.log(upName1);
   upName2 = name2.toUpperCase();
   console.log(upName2);
   upChar1 = upName1.charAt(0);
   console.log(upChar1);
   upChar2 = upName2.charAt(0);
   console.log(upChar2);
   return `${upChar1}.${upChar2}`;
}
