function addTogether() {

  if(arguments.length == 2){
    if(typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number'){
      return undefined;
    } else {
      return arguments[0] + arguments[1];
    }
    
  } else {
    var myArg = arguments[0];
    if(typeof myArg === 'number'){
      return function(arg2) {
        if (myArg === undefined || typeof arg2 !== 'number') {
          return undefined;
        } else {
          return myArg + arg2;
        }
      };
    } else {
      return undefined;
    }
  }
  return false;
}
