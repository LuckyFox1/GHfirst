Array.prototype.myForEach = function (callback) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        callback(this[i], i, this);
    }
};

var array = [1, 2, 3];

function Func(a) {
    a *= 2;
    console.log(a);
}

array.myForEach(Func);

Array.prototype.myMap = function (callback) {
    var tempArr = [],
        temp,
        length = this.length;
    for (var i = 0; i < length; i++) {
        temp = callback(this[i], i, this);
        tempArr.push(temp);
    }
    return tempArr;
};

var arrString = ["cat", "wolf", "tiger"];

function lengthWords(el) {
    return el.length;
}

var newArr = arrString.myMap(lengthWords);

console.log(newArr);

Array.prototype.mySort = function (compareFunction) {
    var length = this.length,
        temp,
        i,
        j;

    if (!compareFunction) {
        for (i = length; i > 0; i--) {
            for (j = 1; j < i; j++) {
                if ((this[j] + "") < (this[j - 1] + "")) {
                    temp = this[j];
                    this[j] = this[j - 1];
                    this[j - 1] = temp;
                }
            }
        }
    }
    else {
        for (i = length; i > 0; i--) {
            for (j = 1; j < i; j++) {
                if (compareFunction(this[j - 1] + "", this[j] + "") > 0) {
                    temp = this[j];
                    this[j] = this[j - 1];
                    this[j - 1] = temp;
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

arrNumber.mySort();
arrRandomWords.mySort();

console.log(arrNumber);
console.log(arrRandomWords);

arrNumber2.mySort(compareNumbers);
console.log(arrNumber2);

