Array.prototype.myForEach = function (callback, arr) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        callback(arr[i], i, arr);
    }
};

var arr = [1, 2, 3];

function Func(a) {
    a *= 2;
    console.log(a);
}

arr.myForEach(Func, arr);

Array.prototype.myMap = function (callback, arr) {
    var tempArr = [],
        temp,
        length = arr.length;
    for (var i = 0; i < length; i++) {
        temp = callback(arr[i], i, arr);
        tempArr.push(temp);
    }
    return tempArr;
};

var arrString = ["cat", "wolf", "tiger"];

function lengthWords(el) {
    return el.length;
}

var newArr = arrString.myMap(lengthWords, arrString);

console.log(newArr);

Array.prototype.mySort = function (arr, compareFunction) {
    var length = arr.length,
        temp,
        i,
        j,
        test;

    if (compareFunction == undefined) {
        for (i = length; i > 0; i--) {
            for (j = 1; j < i; j++) {
                if ((arr[j] + "") < (arr[j - 1] + "")) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }
    else {
        for (i = length; i > 0; i--) {
            for (j = 1; j < i; j++) {
                test = compareFunction(arr[j - 1] + "", arr[j] + "");

                if (test > 0) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }
};

function compareNumbers(a, b) {
    return a - b;
}

var arrNumber = [2, 4, 12, 1, 36, 6, 7, 99, 8, 67];
var arrNumber2 = [2, 4, 12, 1, 36, 6, 7, 99, 8, 67];
var arrRandomWords = ["asd", "erf", "ax", "acbg", "blaks"];

arrNumber.mySort(arrNumber);
arrRandomWords.mySort(arrRandomWords);

console.log(arrNumber);
console.log(arrRandomWords);

arrNumber.mySort(arrNumber2, compareNumbers);
console.log(arrNumber2);

