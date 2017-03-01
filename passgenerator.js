function passwordGen() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var numbers = Math.random() * (20 - 5) + 5;
    for (var i = 0; i <= numbers; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    removeRandomLetter(text);
    return text;
}


function removeRandomLetter(str) {
    var possibleNum = "1234567890";
    var possibleLower = "abcdefghijklmnopqrstuvwxyz";
    var possibleUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var pos = Math.floor(Math.random() * str.length);
    return str.substring(0, pos) + possibleNum.charAt(Math.floor(Math.random() * possibleNum.length)) + str.substring(pos + 1);

    var pos = Math.floor(Math.random() * str.length);
    return str.substring(0, pos) + possibleLower.charAt(Math.floor(Math.random() * possibleLower.length)) + str.substring(pos + 1);

    var pos = Math.floor(Math.random() * str.length);
    return str.substring(0, pos) + possibleUpper.charAt(Math.floor(Math.random() * possibleUpper.length)) + str.substring(pos + 1);

}
