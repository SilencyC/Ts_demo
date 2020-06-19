//类 class
//1、类（class）：定义了一切事物的抽象特点
//2、对象（Object）：类的实例
//3、面向对象（oop）：三大特性：封装、继承、多态
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running!`
  }
}

const snake = new Animal('lily');
// console.log(snake.run())

class Cat extends Animal {
  bark() {
    return `${this.name} is barking!`
  }
}

const jinmao = new Cat('jinmao');

// console.log(jinmao.run());
// console.log(jinmao.bark());

class Dog extends Animal {
  constructor(name: string) {
    super(name);
    console.log('name::', name);
  }
  run() {//重写Animal中的run方法
    return 'meow, ' + super.run();
  }
}

const maomao = new Dog('maomao');

console.log(maomao.run());


class Country {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  desc() {
    return `${this.name} is a big country, he is ${this.age} age!`
  }
}

class China extends Country {
  private department: string;
  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }
  desc() {
    return `wa ou, ${super.desc()}`
  }
}

const myCountry = new China('中国', 5000, 'big');

console.log(myCountry.desc());
