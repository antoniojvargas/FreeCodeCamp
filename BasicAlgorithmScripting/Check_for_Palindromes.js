function palindrome(str) {

  var strNoAlphaNum = str.replace(/[\W_]/g, '').toLowerCase();
  
  var strReverse = strNoAlphaNum.toLowerCase().split('').reverse().join('');
  
  if(strNoAlphaNum === strReverse){
	  return true;
  } else {
	  return false;
  }

}
