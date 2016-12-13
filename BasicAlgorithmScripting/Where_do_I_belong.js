	function getIndexToIns(arr, num) {
	  // Find my place in this sorted array.
	  arr.sort(function(a, b) { return a - b; });
	  
	  for (var i=0; i < arr.length-1; i++){
      if(num == arr[i]){
        return i;
      }
      if(num >= arr[i] && num <= arr[i+1]){
        return i+1;
      }
	  }
	  return arr.length;
	}
