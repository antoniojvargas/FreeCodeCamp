function translatePigLatin(str) {
  var firstChar = str.charAt(0);
  var restWord;
  
  if((/[aeiou]/.test( firstChar)) === true){
    str = str + "way";
  } else {
    if((/[aeiou]/.test( str.charAt(1))) === false){     
      var secondChar = str.charAt(1);
      restWord = str.substring(2,str.length);
      str = restWord + firstChar + secondChar + "ay";
    } else {
      restWord = str.substring(1,str.length);
      str = restWord + firstChar + "ay";
    }

  }
  
  
  return str;
}
