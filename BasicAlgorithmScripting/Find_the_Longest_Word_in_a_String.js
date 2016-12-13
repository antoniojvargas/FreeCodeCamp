function findLongestWord(str) {
  var arrayOfStrings = str.split(" ");
  var longest = 0;
  for(var i = 0; i < arrayOfStrings.length; i++){
    if(arrayOfStrings[i].length > longest){
      longest = arrayOfStrings[i].length ;
    }
  }

  return longest;
}
