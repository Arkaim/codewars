function singSong(a, b) {

    var lol = 'I have a ';
    if (arguments.length == 2 && arguments[1] !== undefined) {
        if (arguments[0] == arguments[1]) {
            return ('I have two ' + a + 's.');
        }
        return ('Uhh! ' + arguments[0].charAt(0).toUpperCase() + arguments[0].slice(1) + '-' + arguments[1] + '!');
    } else {

        if (['a', 'e', 'i', 'o', 'u'].indexOf(a[0].toLowerCase()) !== -1) {
            var lol = 'I have an ';
        }
        return (lol + arguments[0] + '.');
    }

}





console.log(singSong('mongo'));
