"use strict";
// /使用泛型变量
function ecoh(arg) {
    return arg;
}
var result1 = ecoh(123);
function get(Tulp) {
    return [Tulp[1], Tulp[0]];
}
var Tp = get([123, 'str']);
console.log(Tp);
//约束传入的泛型变量必须要有length属性（泛型在函数的参数和返回值中使用）
function ecohWithLength(arg) {
    console.log(arg.length);
    return arg;
}
ecohWithLength([1, 2, 3]);
ecohWithLength('str');
ecohWithLength({ length: 10, width: 20 });
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
        this.data = [];
    }
    GenericNumber.prototype.push = function (item) {
        return this.data.push(item);
    };
    GenericNumber.prototype.pop = function () {
        return this.data.shift();
    };
    return GenericNumber;
}());
var queue1 = new GenericNumber();
queue1.push(123);
var kp1 = {
    key: 1,
    value: 'str'
};
function plus(a, b) {
    return a + b;
}
function plusStr(a, b) {
    return a + b;
}
var ab = plus;
ab(1, 2);
var cd = plusStr;
cd('1', '2');
