function disemvowel(str) {
    str = str.replaceAll(/[aeiou]/gi, ""); 
    return str;
  }



console.log(disemvowel("this is a test AND seoiuAEIOU."));