	function titleCase(str) {
	  var arrayOfStrings = str.split(" ");
	  
	  for(var i = 0; i < arrayOfStrings.length; i++){
		if(arrayOfStrings[i].length > 1){
		  arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + 
			arrayOfStrings[i].slice(1, arrayOfStrings[i].length).toLowerCase();
		} else {
		  arrayOfStrings[i] = arrayOfStrings[i].toUpperCase();
		}      
	  }
	  str = arrayOfStrings.join(" ");

	  return str;
	}
