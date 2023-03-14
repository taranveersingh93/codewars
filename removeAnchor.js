/* Remove anchor from URL
https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript
Complete the function/method so that it returns the url with anything after 
the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url){
    var index = url.length;
    for (var i =0; i<url.length; i++) {
        if(url[i]==="#") {
            index = i;
            break;
        }
    } 
    return url.slice(0,index);
  }