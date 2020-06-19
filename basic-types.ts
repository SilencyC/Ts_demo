let isDone: boolean = false;

let age: number = 26;

let binaryNumber: number = 0b11011;//二进制

let firstName: string = 'WenWu';

let message: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

let notSure: any = 4;
notSure = 'maybe it is a string';
notSure = true;

notSure.myName;
notSure.getName();

//联合类型
let numberOrString: number | string = 234;
numberOrString = 'abc';
// numberOrString = true; //不行

//Array
let arrOfNumbers: number[] = [1, 2, 3];
arrOfNumbers.push(4);
// arrOfNumbers.push('qwe')//不行

//元组Tuple 合并不同类型的数组/限定了数据类型和个数的数组

let userInfo: [string, number] = ['WenWu', 26];
// userInfo = ['WenWu']; //不行
// userInfo = ['WenWu', 26, true]; //不行
