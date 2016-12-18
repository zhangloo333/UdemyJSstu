/**
 * Created by leizha on 12/16/16.
 */

function tellmewhenDon(callback) {
    var a = 1000;
    var b = 2000;
    callback();
}

tellmewhenDon(function () {
    console.log('I am done!');
});


tellmewhenDon(function () {
    console.log('all done !')
})