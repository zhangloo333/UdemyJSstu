/**
 * Created by lee on 12/17/16.
 */
function b() {
    console.log(myVariable);
}

function a() {
    var myVariable =2;
    b();
}

var myVariable = 1;

a();

// mayvariable  = 2

function c() {
    var myVariable =2;
    (function() {
        console.log(myVariable);
    })();
}

var myVariable = 1;

c();