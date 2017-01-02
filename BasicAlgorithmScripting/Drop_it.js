function dropElements(arr, func) {
  // Drop them elements.
  var limit = arr.length;
  for(i = 0; i < limit; i++){
    if(func(arr[0])){
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
