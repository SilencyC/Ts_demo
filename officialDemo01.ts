function greeter(person: string) {
  return 'Hello,' + person
}

let user = 'Jane User';

console.log(greeter(user));

interface Person {
  firstName: string,
  lastName: string
}

function getAllName(person: Person) {
  return "Hello," + person.firstName + "--" + person.lastName
}

let userName: Person = {
  firstName: "Jane",
  lastName: "User"
}

console.log(getAllName(userName))

class Student {
  fullName: string;
  //在构造函数的参数上使用public等同于创建了同名的成员变量。
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person1 {
  firstName: string,
  lastName: string
}

function greeter1(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user1 = new Student('Jane', 'M.', 'User')

console.log(greeter1(user1));



