	function confirmEnding(str, target) {
	  // "Never give up and good luck will find you."
	  // -- Falcor
	  if(str.substring(str.length - target.length) == target){
		  return true;
	  } else {
		  return false;
	  }
	}
