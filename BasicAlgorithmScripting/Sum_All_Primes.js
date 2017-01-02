function sumPrimes(num) {
		var actualNum =0;
		var total = 0;

		for (i = 1; i <= num; i++){ 		  	  
			var counter=0; 	  
			for(actualNum =i; actualNum>=1; actualNum--){
				if(i%actualNum===0){
					counter++;
				}
			}
			if (counter ==2)
			{
				total+=i;
			}	
		}

	return total;
}
