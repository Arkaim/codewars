function to_nato(words) {
    var natoalp = {
        A: 'Alfa',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'Xray',
        Y: 'Yankee',
        Z: 'Zulu'
    };
    words = words.replace(/\s/g, '');
    var ans = '';
    words = words.toUpperCase();
    for (var i = 0; i < words.length; i++) {
        if (words[i] == '!' || words[i] == '?' || words[i] == '.') {
            ans += words[i] + ' ';
            continue;
        }
        ans += natoalp[words[i]] + ' ';
    }
    return ans.trim();

}
console.log(to_nato('Alikhan kotakbas'));
