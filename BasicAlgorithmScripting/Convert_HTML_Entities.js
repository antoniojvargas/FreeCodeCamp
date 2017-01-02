function convertHTML(str) {

  var tempStr = str.split('');

  for (var i = 0; i < tempStr.length; i++) {
    switch (tempStr[i]) {
      case '<':
        tempStr[i] = '&lt;';
        break;
      case '&':
        tempStr[i] = '&amp;';
        break;
      case '>':
        tempStr[i] = '&gt;';
        break;
      case '"':
        tempStr[i] = '&quot;';
        break;
      case "'":
        tempStr[i] = "&apos;";
        break;
    }
  }

  tempStr = tempStr.join('');
  return tempStr;
}
