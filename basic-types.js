"use strict";
var isDone = false;
var age = 26;
var binaryNumber = 27; //二进制
var firstName = 'WenWu';
var message = "Hello, " + firstName + ", age is " + age;
var u = undefined;
var n = null;
var notSure = 4;
notSure = 'maybe it is a string';
notSure = true;
notSure.myName;
notSure.getName();
//联合类型
var numberOrString = 234;
numberOrString = 'abc';
// numberOrString = true; //不行
//Array
var arrOfNumbers = [1, 2, 3];
arrOfNumbers.push(4);
// arrOfNumbers.push('qwe')//不行
//元组Tuple 合并不同类型的数组/限定了数据类型和个数的数组
var userInfo = ['WenWu', 26];
// userInfo = ['WenWu']; //不行
// userInfo = ['WenWu', 26, true]; //不行
