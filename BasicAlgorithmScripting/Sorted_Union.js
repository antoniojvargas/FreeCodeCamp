function uniteUnique(arr) {
	var finalArr = [];
	for(i = 0; i < arguments.length; i++){
		for(j = 0; j < arguments[i].length; j++){
			if(finalArr.indexOf(arguments[i][j]) < 0){
				finalArr.push(arguments[i][j]);
			}
		}		
	}

  	return finalArr;
}
