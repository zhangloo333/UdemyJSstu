/**
 * Created by lee on 12/18/16.
 */

great();

great2();

function great(){
    console.log('hello word!');
}

var great2 = function (){
    console.log('hola oe!');
}

great2();


//函数里面传入一个函数
function log(a){
    a();
}