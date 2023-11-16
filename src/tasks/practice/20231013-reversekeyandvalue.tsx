// 并附加一个js基础题，写一个函数，将一个object的key value翻转，如输入
// { name: "liudong", age: 30}，输出{ liudong: "name", "30": "age" }

export function ReverseKeyToValue(): any {
  const obj = { name: "liudong", age: "30" };

  return JSON.stringify(
    Object.entries(obj).reduce((sum, curr) => {
      sum[curr[1]] = curr[0];
      return sum;
    }, {} as any),
  );
}
