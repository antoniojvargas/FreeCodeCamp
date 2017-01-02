function steamrollArray(arr) {
  var finalArr = [];

  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      finalArr.push(arg);
    } else {
      for (var i in arg) {
        flatten(arg[i]);
      }
    }
  };

  arr.forEach(flatten);
  return finalArr;
}
