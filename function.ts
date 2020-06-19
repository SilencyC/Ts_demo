//函数声明的写法
//必选参数不能位于可选参数后。
//参数带默认值就是可选参数
// function add(x: number, y: number, z?: number): number {
//   if (typeof z === 'number') {
//     return x + y + z;
//   } else {
//     return x + y;
//   }
// }

// let result = add(2, 3);
// result = add(2, 3, 4);

//函数表达式
const add = function(x: number, y: number, z?: number): number {//函数类型 => 类型推论
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

// const add2: string = add;//报错
//定义函数类型
const add2: (x: number, y: number, z?: number) => number = add;