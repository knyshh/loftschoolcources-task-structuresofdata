(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var arrays = require("./func.js");

let array = [1, 2, 3, 4, 5, 6];

// forEach
arrays.forEach(array,function(item,i,arr){
    console.log("Значение: " + item + " Индекс: " + item + " массив: [" + arr + "]");
});

// map
let newMap = arrays.map(array,function(item,i,arr){
    return item*item;
});
console.log('map '+newMap);


// filter
let newFilter = arrays.filter(array,function(item,i,arr){
    return item > 3;
});
console.log('filter '+newFilter);


// reduce
let newReduce = arrays.reduce(array, function(result, item, i, arr){
    return result + item;
},0);
console.log('reduce '+newReduce);


// slice
let newSlice = arrays.slice(array, 1,4);
console.log('slice ' + newSlice);
},{"./func.js":2}],2:[function(require,module,exports){

    function forEach(arr, callbackFunc, thisArg){
        let i;
        for(i = 0; i < arr.length; i++){
            callbackFunc.call(thisArg, arr[i], i ,arr);
        }
    }
    function map(arr, callbackFunc, thisArg){
        let i, array = [];
        for(i = 0; i < arr.length; i++){
            array[array.length] = callbackFunc.call(thisArg, arr[i], i ,arr);
        }
        return array;
    }

    function filter(arr, callbackFunc, thisArg){
        let i, array = [];
        for(i = 0; i < arr.length; i++){

            if(callbackFunc.call(thisArg, arr[i], i ,arr)){
                array[array.length] = arr[i];
            }

        }
        return array;
    }

    function reduce(arr, callbackFunc, firstValue){
        let i, result = firstValue;

        for(i = 0; i < arr.length; i++){
            result = callbackFunc.call(null, result, arr[i], i ,arr);
        }

        return result;
    }

    function slice([... arr], start, end){
        let
            array = arr,
            lengthArr = array.length,
            pointStart = start || 0,
            pointEnd = end || lengthArr,
            result = [];

        if(start < 0) pointStart = lengthArr + pointStart;
        if(pointEnd > lengthArr) pointEnd = lengthArr;

        for(pointStart; pointStart < pointEnd; pointStart++){
            result[result.length] = array[pointStart];
        }

        return result;
    }


    module.exports = {
        forEach: forEach,
        filter: filter,
        map: map,
        reduce: reduce,
        slice:slice
    }

},{}]},{},[1])