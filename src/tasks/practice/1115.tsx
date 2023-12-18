import react from "react";

const tree = {
  A: {
    B: {
      D: { I: { K: "AAA" } },
      E: { J: "JJJ" },
      F: "FF",
    },
    C: {
      G: {
        L: "LLL",
        M: { O: "OOO" },
      },
      H: {
        N: {
          P: "PPP",
        },
      },
    },
  },
};
type Tree = typeof tree;
class Result {
  children: Array<Tree>;
  constructor(data: Array<Tree>) {
    this.children = data;
  }
}
class One extends Result {
  constructor(son: Array<Tree>) {
    super(son);
    this.children = son;
  }
  add() {
    () => {
      class Two extends Result {
        constructor(children: Array<Tree>) {
          super(children);
        }
      }
    };
  }
}
export function Apppppp(): any {
  return <div>dsd</div>;
}
// - [ ] 写一个class，Tree用于描述一个树形结构如图，至少具有一个children数组属性存储了它，下一层的所有子元素，
// 所有子元素依然是一个Tree，且具有一个add方法添加一个子元素，具有一个构造函数，可以有一个参数传入初始子节点
// - [ ] Tree上具有一个forEachNode方法用于遍历它下一层的所有子元素，具有一个deepForEachNode遍历它下属所有元素
// - [ ] 下题算两题
// - [ ] 写一个DoubleTree继承Tree，区别在于DoubleTree最多只能有两个子节点，请重写需要重写的函数

// - [ ] 写一个组件名为Markdown，有一个prop，为一串特定格式【1】的多行字符串，这个特定格式的字符串遵从以下解析及渲染原则：当出先了一个井号#字符则把这一行用h1标题渲染，如果出现了两个井号则用h2标题渲染以此类推到6个，如果没有这种标记则用p渲染，注意：所有标记不要渲染，只起到识别作用
// - [ ] 此外如果文字中出现了被*包裹的，需要将此文字加粗

// # Title 1
// ## Title 2
// Paragraph *bold* he

export const MarkDown = (prop: string) => {
  return <div></div>;
};
