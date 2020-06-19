//interface接口:定义对象的类型
//1、对对象的形状（shape）进行描述
//2、对类（class）进行抽象
//3、Duck Typeing（鸭子类型）
interface IPerson {
  readonly id: number;//只读属性
  name: string;
  age?: number;//可选属性
}

let WenWu: IPerson = {
  id: 1234,
  name: 'WenWu'
}
// WenWu.id = 111;//只读不能修改


interface handing {
  name: string;
  call(s: string): void;
}

class Car implements handing {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  call() {
  }
}

