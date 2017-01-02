function sumFibs(num) {
	var fibo1 = 0;
	var fibo2 = 1;
	var total = 0;

	while(fibo2<=num){
 		if(fibo2 % 2 !== 0){
			total = total + fibo2;
		}       
		fibo2 = fibo1 + fibo2;
		fibo1 = fibo2 - fibo1;

    }
  return total;
}
