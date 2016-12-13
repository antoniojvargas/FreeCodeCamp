	function bouncer(arr) {
	  // Don't show a false ID to this bouncer.
	  function isNotFalsy(value) {
		  return Boolean(value);
	  }

	  var filtered = arr.filter(isNotFalsy);
	  return filtered;
	}
