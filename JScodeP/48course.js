/**
 * Created by leizha on 12/16/16.
 */

function makeGreeting(language) {
    return function (fist,last) {
        if(language == 'en') {
            console.log('hellp ' + fist + ' ' + last);
        }
        if(language == 'es') {
            console.log('olia ' + fist + ' ' + last);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('aaa','bbb');
greetSpanish('aaa','bbb');

