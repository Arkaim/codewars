function rot13(message) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?+-. ';
    var rot13alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890!?+-. ';
    var res = '';
    for (var i = 0; i < message.length; i++) {
        res += rot13alphabet[alphabet.indexOf(message[i])];

    }
    return res;
}
console.log(rot13('hello'));
