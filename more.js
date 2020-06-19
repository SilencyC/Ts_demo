"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//类型别名
function ecohF(a, b) {
    return a + b;
}
var aF = ecohF;
aF(1, 2);
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName(function () { return '4545454'; }));
//type assertion
function getLength(input) {
    if (input.length) {
        return input.length;
    }
    else {
        return input.toString().length;
    }
}
