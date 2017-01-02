var denom = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

function checkCashRegister(price, cash, cid) {
 
  var changeArr = [];
  var denomAmount;
  var currCurrency;
  var change = +(cash - price).toFixed(2);
  
  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});


  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  } else if(register.total < change){
    return 'Insufficient Funds';
  }
  for (var i = +cid.length - 1; i >= 0; i--) {
    currCurrency = +cid[i][1].toFixed(2);
    currType = cid[i][0];

    if (+denom[i].toFixed(2) <= +change.toFixed(2)) {
      denomAmount = Math.floor(currCurrency / denom[i]);
      if ((denom[i] * denomAmount) >= change) {
        denomAmount = Math.floor(change / denom[i]);
      }
      currCurrency = +(denom[i] * denomAmount).toFixed(2);
      change = +(change - currCurrency).toFixed(2);
      cid[i][1] = currCurrency;

      changeArr.push([currType, currCurrency]);
    }
  }
  var totalChange = changeArr.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});

  if(totalChange.total < change){
    return 'Insufficient Funds';
  }
  return changeArr;
}
