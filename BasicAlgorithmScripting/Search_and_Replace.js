function myReplace(str, before, after) {
    var oneChar;
  
    if((/^[A-Z]/.test( before.charAt(0))) === true){//uper
      oneChar = after.charAt(0).toUpperCase();
      after = oneChar + after.substring(1,after.length);
    } else {//lower
      oneChar = after.charAt(0).toLowerCase();
      after = oneChar + after.substring(1,after.length);
    }

    return str.replace(before,after);
}
