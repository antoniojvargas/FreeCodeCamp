	function truncateString(str, num) {
	  // Clear out that junk in your trunk
	  if(str.length <= num ){
		  return str;
	  }
	  str = str.slice(0,num);

	  if(str.length > 3){
		  str = str.substring(0, str.length - 3) + "...";
	  } else {
		  str = str.substring(0, num) + "...";
	  }
		
	  return str;
	}
