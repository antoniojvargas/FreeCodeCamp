function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;
  for (var prop in collection) {
    
    if(collection[prop].hasOwnProperty(pre) || collection[prop][pre] == pre){
      if(Boolean(collection[prop][pre]) === false){
        return false;
      }
      count++;
    }
  }
  if(collection.length == count){
    return true;
  } else {
    return false;
  }
}
