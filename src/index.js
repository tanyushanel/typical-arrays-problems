exports.min = function min(array) {
    return array && array.length ? Math.min(...array) : 0;
    // return arr && arr.length ? Math.min.apply(Math, array) : 0;
}

exports.max = function max(array) {
    return array && array.length ? Math.max(...array) : 0;
    // return array && array.length ? Math.max.apply(Math, array) : 0;
}

exports.avg = function avg(array) {
    return array && array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}