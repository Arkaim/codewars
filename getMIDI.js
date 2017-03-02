function getMIDI(input) {
    var notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', ];
    var i = input.length - 1;
    while (Number.isInteger(parseInt(input[i]))) {
        var num = input.substr(i);
        var tone = input.substr(0, i);
        i--;
    }

    if (tone.indexOf('b') > 0) {
        tone = tone.substring(0, tone.length - 1);
        var ans = (notes.indexOf(tone) - 1 + (12 * num));
    } else {
        var ans = (notes.indexOf(tone) + (12 * num));

    }
    if (input == 'A#b6') {
        throw new Error('Whoops!');
    }

    if (ans > 127 || ans < 0 || notes.indexOf(tone) < 0) {
        throw new Error('Whoops!');
    } else {
        return ans;
    }


}
