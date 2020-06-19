import { type } from "os";

//类型别名
function ecohF(a: number, b: number): number {
  return a + b;
}

// const aF: (a: number, b: number) => number = ecohF
type ecohT = (a: number, b: number) => number
const aF: ecohT = ecohF

aF(1, 2)

type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

console.log(getName(() => '4545454'))

//type assertion

function getLength(input: string | number): number {
  if ((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}

