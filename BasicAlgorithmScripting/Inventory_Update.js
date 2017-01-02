function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
   var itemIdex;

  var getProductIndex = function (name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === name) {
        return i;
      }
    }
    return undefined;
  };

  for(var i = 0; i < arr2.length; i++){
    //itemIdex = getItemIndex(arr1,arr2[i][1]);
    itemIdex = getProductIndex.call(arr1,arr2[i][1]);
    if(itemIdex === undefined){
      arr1.push(arr2[i]);
    } else {
      arr1[itemIdex][0] += arr2[i][0];
    }
  }

  arr1.sort(function(currItem, nextItem) {
    return currItem[1] > nextItem[1] ? 1 : -1;
  });
    return arr1;
}
