function findElement(arr, func) {
  var num;
  for(i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr[i];
    }
  }
  return num;
}
