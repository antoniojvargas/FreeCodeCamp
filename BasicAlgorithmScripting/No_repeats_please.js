function permAlone(str) {
    var regex = /(.)\1+/g;
    var arr = str.split("");
    var permutations = [];
    var tmp;

    function swap(a, b) {
      tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }

    function generate(int) {
      if (int === 1) {
        permutations.push(arr.join(''));
      } else {
        for (var i = 0; i != int; ++i) {
          generate(int - 1);
          swap(int % 2 ? 0 : i, int - 1);
        }
      }
    }

    generate(arr.length);
    console.log(permutations);

    var filtered = permutations.filter(function(string) {
      return !string.match(regex);
    });

    return filtered.length;
}
