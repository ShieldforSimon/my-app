import react from "react";

// 1. 所有动物都具有一个重量属性，和一个性别属性，性别为任意类型（因为自然界存在混合性别多性别等），且所有动物都可以运动
// 2. 哺乳动物是动物的一类，哺乳动物可以哺乳
// 3. 猫是哺乳动物的一类，猫的性别只有雌雄两种，且猫可以喵喵叫，且猫一般都有个名字
// 4. 小白是一只猫，雌的

// class Animal {
//   weight: number;
//   gender: any;
//   constructor(weight: number, gender: any) {
//     this.weight = weight;
//     this.gender = gender;
//   }
//   move() {
//     console.log("it can move");
//   }
// }
// class Mammal extends Animal {
//   breastFeeding() {
//     console.log("it need be fed by breast");
//   }
// }
// class Cat extends Mammal {
//   gender: "male" | "female";
//   name: string;
//   constructor(weight: number, gender: "male" | "female", name: any) {
//     super(weight, gender);
//     this.gender = gender;
//     this.name = name;
//   }
//   shut() {
//     console.log("it can shut");
//   }
// }
// const xiaoBai = new Cat(7, "female", "小白");
// xiaoBai.move();
// xiaoBai.shut();
 // 写一个组件名为Markdown，有一个prop，为一串特定格式【1】的多行字符串，这个特定格式的字符串遵从以下解析及渲染原则：
// 当出先了一个井号#字符则把这一行用h1标题渲染，如果出现了两个井号则用h2标题渲染以此类推到6个，
// 如果没有这种标记则用p渲染，注意：所有标记不要渲染，只起到识别作用
//  此外如果文字中出现了被*包裹的，需要将此文字加粗

`
# Title 1
## Title 2
 Paragraph *bold* he