function pairElement(str) {
  var finalArr = [];

  
  var pair = function (char){  
    switch (char){
      case "A":
          finalArr.push(["A","T"]);          
        break;
      case "T":
          finalArr.push(["T","A"]);
        break;  
      case "C":
          finalArr.push(["C","G"]);
        break;
      case "G":
          finalArr.push(["G","C"]);          
        break;        
    }
 };
 for(i=0 ;i < str.length;i++){
    pair(str[i]);
 }

 
  return finalArr;
}
