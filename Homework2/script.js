var i,
    sum_before,
    sum_after,
    difference,
    maxElement,
    lastIndexMaxElement;

var arr = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];

sum_before = arr.reduce(function(a, b) {
    return a + b;
});

maxElement = getMaxOfArray(arr);
lastIndexMaxElement = arr.lastIndexOf(maxElement);

for(i = 1; i < arr.length; i++) {
    if(arr[i - 1] > arr[i] && arr[i - 1] < maxElement) {
        arr[i] = arr[i - 1];
    }
    if((arr[i] === maxElement && lastIndexMaxElement === i) || arr[0] === maxElement) {
        break;
    }
}

arr.reverse();

for(i = 1; i < arr.length; i++) {
    if(arr[i - 1] > arr[i] && arr[i - 1] < maxElement) {
        arr[i] = arr[i - 1];
    }
    if(arr[i] === maxElement || arr[0] === maxElement) {
        break;
    }
}

sum_after = arr.reduce(function(a, b) {
    return a + b;
});

difference = sum_after - sum_before;

document.write(difference + "<br />");

for(i = 0; i < arr.length; i++) {
    document.write(arr[i] + " ");
}

function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}