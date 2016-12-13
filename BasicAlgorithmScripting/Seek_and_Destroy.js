	function destroyer(arr) {
	  // Remove all the values
	  var args = Array.prototype.slice.call(arguments);
	  args.splice(0, 1);
	  
	  function destroy(value) {
		  return args.indexOf(value) === -1;
	  }

	  var filtered = arr.filter(destroy);
	  return filtered;
	}
