"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类 class
//1、类（class）：定义了一切事物的抽象特点
//2、对象（Object）：类的实例
//3、面向对象（oop）：三大特性：封装、继承、多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running!";
    };
    return Animal;
}());
var snake = new Animal('lily');
// console.log(snake.run())
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.bark = function () {
        return this.name + " is barking!";
    };
    return Cat;
}(Animal));
var jinmao = new Cat('jinmao');
// console.log(jinmao.run());
// console.log(jinmao.bark());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        console.log('name::', name);
        return _this;
    }
    Dog.prototype.run = function () {
        return 'meow, ' + _super.prototype.run.call(this);
    };
    return Dog;
}(Animal));
var maomao = new Dog('maomao');
console.log(maomao.run());
var Country = /** @class */ (function () {
    function Country(name, age) {
        this.name = name;
        this.age = age;
    }
    Country.prototype.desc = function () {
        return this.name + " is a big country, he is " + this.age + " age!";
    };
    return Country;
}());
var China = /** @class */ (function (_super) {
    __extends(China, _super);
    function China(name, age, department) {
        var _this = _super.call(this, name, age) || this;
        _this.department = department;
        return _this;
    }
    China.prototype.desc = function () {
        return "wa ou, " + _super.prototype.desc.call(this);
    };
    return China;
}(Country));
var myCountry = new China('中国', 5000, 'big');
console.log(myCountry.desc());
