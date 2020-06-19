// /使用泛型变量
function ecoh<T>(arg: T): T {
  return arg
}

const result1 = ecoh(123)

function get<T, U>(Tulp: [T, U]): [U, T] {
  return [Tulp[1], Tulp[0]];
}

const Tp = get([123, 'str']);
console.log(Tp);

// function ecohWithLength<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg
// }

// ecohWithLength([1,2,3])

//泛型约束
interface WithLength {
  length: number
}

//约束传入的泛型变量必须要有length属性（泛型在函数的参数和返回值中使用）
function ecohWithLength<T extends WithLength>(arg: T): T {
  console.log(arg.length);
  return arg
}

ecohWithLength([1, 2, 3])
ecohWithLength('str')
ecohWithLength({ length: 10, width: 20 })

//泛型类
class GenericNumber<T> {
  private data: Array<T> = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift()
  }
}

const queue1 = new GenericNumber<number>();
queue1.push(123);
// queue1.push('str');
// console.log(queue1.pop().toFixed());

interface KeyPair<T, U> {
  key: T;
  value: U
}

const kp1: KeyPair<number, string> = {
  key: 1,
  value: 'str'
}

interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}

function plusStr(a: string, b: string): string {
  return a + b;
}

const ab: IPlus<number> = plus

ab(1,2)

const cd: IPlus<string> = plusStr

cd('1', '2')