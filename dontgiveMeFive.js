function dontGiveMeFive(start, end) {
    var num = -1;
    for (var i = start; i <= end; i++) {
        if ((i.toString()).indexOf('5') > 0) {
            continue;
        }
        num++;
    }
    return num;

}
