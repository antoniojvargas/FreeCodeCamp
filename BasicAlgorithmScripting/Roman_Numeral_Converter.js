function convertToRoman(num) {
  
  var roman="";
  var repeat;
  var magnitude=[1000,900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbol=["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  repeat=num;
  for(x=0; num>0; x++){
      repeat=num/magnitude[x];
      for(i=1; i<=repeat; i++){
          roman=roman + symbol[x];
      }
      num=num%magnitude[x];
  }
  return roman;

}
