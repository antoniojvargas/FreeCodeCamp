function reverseString(str) {
  var newArray = [];
  newArray = str.split("");
  newArray = newArray.reverse();
  str = newArray.join("");
  return str;
}

reverseString("hello");
