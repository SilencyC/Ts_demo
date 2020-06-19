enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'Right'
}

//使用常量枚举能够提升性能

const enum Dir {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'Right'
}

let value = 'UP'

if (value === Dir.Up) {
  console.log('go up!');
}