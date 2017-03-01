function inArray(array1, array2) {
    var res = [];
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            (array2[j].includes(array1[i])) ? res.push(array1[i]): false;
        }
    }
    return res;
}

console.log(inArray(["lively", "alive", "harp", "sharp", "armstrong"], ["xyz", "live", "strong"]));
