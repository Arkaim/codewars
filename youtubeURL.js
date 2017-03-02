function makeYoutubeLink(str) {
    var url = str.substr(str.indexOf('/', '='), 10);
    return ('https://www.youtube.com/embed' + url);
}
var url = 'awdawdaw/awdawd';

console.log(makeYoutubeLink('https://www.youtube.com/watch?v=L3JxAuUyjzY'));
