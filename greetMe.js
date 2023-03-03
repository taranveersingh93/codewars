/* GREET ME
https://www.codewars.com/kata/535474308bb336c9980006f2
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function(name) {
    var nameArray = name.split("");
    nameArray[0]=nameArray[0].toUpperCase();
    for(var i=1; i<nameArray.length; i++) {
        nameArray[i] = nameArray[i].toLowerCase();
    }
    console.log(nameArray);
    var rename = nameArray.join("");
    console.log(rename);
    return `Hello ${rename}!`
};