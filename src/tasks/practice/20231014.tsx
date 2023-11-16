import react from "react";

export function Entri(): any {
  const obj = { name: "liudong", age: "10", weight: "15" };

  let a = Object.keys(obj);
  let result = [];
  // @ts-ignore
  const fn = (x: string) => [x, obj[x]];

  console.log(a.map(fn));

  return <div></div>;
}
