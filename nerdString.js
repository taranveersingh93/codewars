/*
Ch4113ng3
https://www.codewars.com/kata/59e9f404fc3c49ab24000112
Make your strings more nerdy: Replace all 'a'/'A' with 4, 
'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

function nerdify(txt){
    txt = txt.replaceAll("a", "4");
    txt = txt.replaceAll("A", "4");
    txt = txt.replaceAll("e", "3");
    txt = txt.replaceAll("E", "3");
    txt = txt.replaceAll("l", "1");
    return txt;
}