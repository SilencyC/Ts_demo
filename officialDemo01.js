"use strict";
function greeter(person) {
    return 'Hello,' + person;
}
var user = 'Jane User';
console.log(greeter(user));
function getAllName(person) {
    return "Hello," + person.firstName + "--" + person.lastName;
}
var userName = {
    firstName: "Jane",
    lastName: "User"
};
console.log(getAllName(userName));
var Student = /** @class */ (function () {
    //在构造函数的参数上使用public等同于创建了同名的成员变量。
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter1(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user1 = new Student('Jane', 'M.', 'User');
console.log(greeter1(user1));
