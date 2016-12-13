function factorialize(num) {
  var fact = 1;
  var cont = 1;
  if(num === 0){
	return 1;
  }
  while(num > 1){
	fact = fact * (num);
	num--;
  }
  
  return fact;
}
