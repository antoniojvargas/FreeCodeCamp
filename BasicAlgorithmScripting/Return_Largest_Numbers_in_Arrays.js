	function largestOfFour(arr) {
	  // You can do this!
	  var tempArr = [];
	  var largestArr = [];
	  // Only change code below this line
	  
	  for (var i=0; i < arr.length; i++) {
      tempArr = arr[i].sort( function(a, b) { 
        return a - b;
      });
      largestArr.push(tempArr[tempArr.length-1]);
	  }

	  return largestArr;
	}
