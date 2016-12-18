/**
 * Created by leizha on 12/16/16.
 */
/*
* function al programing
* */

//原始形态，怎么来的/

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i = 0 ; i < arr1.length; i++){
    arr2.push(arr1[i]*2);
}

//怎么写一个map 的iteration

function mapForEach(arr,fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr3 = mapForEach(arr1,function (item) {
   return item * 2;
});

//这里item 就表示 arr1 里面的 每一个数

var arr4 = mapForEach(arr1,function (item) {
    return item >2;
});

console.log(arr3);

console.log(arr4);

//怎么简便的让limiter更小，能让它简便的返回。
var checkPast = function (limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1,checkPast.bind(this,2));
console.log(arr5);

var checkPast2 = function (limiter) {
    return function (limiter, item) {
        return item > limiter
    }.bind(this,limiter);

}

var arr6 = mapForEach(arr1, checkPast2(2));
console.log(arr6);