import react from "react";
import MethodKeysOf = jest.MethodKeysOf;

class Collection<T> {
  private dataOne: Array<T>;
  private dataTwo: Array<T>;
  constructor(dataOne: Array<T>, dataTwo: Array<T>) {
    this.dataOne = dataOne;
    this.dataTwo = dataTwo;
    console.log("类被创建了");
  }
  add(x: T): any {
    if (x as T) {
      this.dataOne.push(x);
    } else {
      this.dataTwo.push(x);
    }
  }
  forEach(z: Function, y: Function, x: T) {
    if (y(x)) {
      this.dataOne.forEach((item: T) => z(item));
    }
  }
  print(y: any) {
    console.log(this.dataOne.length);
  }
}

// type T = Record<string, string>;
//
// class Collection {
//   private data: Array<T>;
//   constructor(data: Array<T>) {
//     this.data = data;
//     console.log("类被创建了");
//   }
//   add(x: T): any {
//     this.data.push(x);
//   }
//   print() {
//     console.log(this.data.length);
//   }
// }
// JS、TS混合基础题（中等难度，110min）
// 此题考察class和ts泛型，也同时考察面向对象编程
//
// - [ ] 写一个class名字为Collection （这个单词在计算机里含义为：集合，用来描述一组相同类型的数据，比如堆人，一堆苹果），
// 这个Collection具有一个泛型来描述存储的类型，并内置一个存储结构（建议使用数组），存储结构不可被外部访问，且此Collection
// 被创建时会在控制台输出一条信息
// - [ ] Collection具有一个add函数可以向里面添加元素，具有一个forEach函数可以传入一个函数遍历其中的元素，还具有一个无参数的print函数控制台打印出元素数量，并写出以上的测试代码
// - [ ] 改造此Collection，使其具有两个泛型，两个存储结构，支持存储两种类型的数据，同时add函数将需要识别类型来存入哪个数组，forEach函数需要新增一个参数来决定遍历哪个元素，print函数将输出两条信息
