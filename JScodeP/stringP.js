/**

String.charAt(index) => character
*/

var str = 'abcdefghijkmlnopqrstuvwxyz';
console.log(str);

// String.charAt()
console.log(str.charAt(1));

//string.indexOf(string/char)
var c = str.indexOf('z',10);
console.log(c);

//lastIndexOf(string/charector, fromIndex)
var str1 = 'abasddabasdsdsdsd'
var e = str1.lastIndexOf('a');
console.log(e);


var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

console.log(str.substring(3,10));
console.log(str.substr(3,7));