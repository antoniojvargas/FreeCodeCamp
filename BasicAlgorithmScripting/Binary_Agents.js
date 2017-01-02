function binaryAgent(str) {
  str = str.split(" ");
  var j=0;
  var sentence = "";

  console.log(str);
  for(k=0; k<str.length; k++){
    for(i=0; i<str[k].length; i++){
      if(str[k][i] == '1'){
        j = j + Math.pow(2,str[k].length-1-i);
      }
    }
    
    
    sentence += (String.fromCharCode(j));
    j = 0;
  }
  return sentence;
}
