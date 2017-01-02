	function rot13(str) { // LBH QVQ VG!
	  var myStr ="";
	  var base = 65;
	  var top = 90;
	  var num = 0;

	  for (var i=0; i < str.length; i++){
		num = str.charCodeAt(i);
		if(num == 32){
		  myStr = myStr + " "; 
		} else {
		  if(num == 33 || num == 63 || num == 46){
			num = num;
		  } else {
			if(num - 13 < base){
			  num = (top - (base - (num - 13))) + 1;
			} else {
			  num = num -13;
			}        
		  }
		  myStr = myStr + String.fromCharCode(num);
		}
	  }
	  
	  return myStr;
	}
