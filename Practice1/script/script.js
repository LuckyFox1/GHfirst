var array = [
        -5, 4, 1, 0, 35, -13, 55, undefined, 1, -7, 3, 2, -88, 4, 3, 66, 2, -5
    ],
    sum = 0,
    min = array[0],
    max = array[0],
    i,
    length = array.length;

for (i = 0; i < length; i++) {
    sum += typeof array[i] === 'number' && !isNaN(array[i]) ? array[i] : 0;
}
for (i = 0; i < length; i++) {
    if (min > array[i]) {
        min = array[i];
    }
}
for (i = 0; i < length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
document.write("sum = " + sum + "<br />" + "min = " + min + "<br />" + "max = " + max);
