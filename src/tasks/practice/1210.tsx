import react from "react";
// // 1. 小白是猫, 可以吃东西
// // 2. 食物分为很多类, 动物会吃其中几类食物
// // 3. 动物有最偏好的食物vvvv
// // 4. 小白最喜欢的是虾
// // 5. 小白只吃熟虾, 且虾要被剥壳
// // 6. 小白想吃虾的时候会跑到厨房叫
// // 7. 小白吃完虾后会出去游玩, 大约5小时后又会叫想吃
// export function catSeries() {
//   class Food {
//     constructor(public name: string) {}
//   }
//
//   class Vegetable extends Food {}
//
//   class Meat extends Food {}
//
//   class Shrimp extends Meat {
//     isCooked: boolean;
//     isPeeled: boolean;
//
//     constructor(name: string) {
//       super(name);
//       this.isCooked = false;
//       this.isPeeled = false;
//     }
//
//     cook() {
//       this.isCooked = true;
//     }
//
//     peel() {
//       this.isPeeled = true;
//     }
//
//     readyToBeFeeder() {
//       this.isCooked = true;
//       this.isPeeled = true;
//     }
//   }
//
//   class Animal {
//     constructor(
//       public name: string,
//       public favoriteFood: string,
//     ) {}
//
//     eat(food: Food) {
//       console.log(`${this.name} can have ${food.name}`);
//     }
//
//     outToPlay() {
//       console.log(`${this.name} plays game out`);
//     }
//   }
//
//   class Cat extends Animal {
//     private addictedToShrimp: boolean;
//     private isHungry: boolean;
//
//     constructor(
//       public name: string,
//       public favoriteFood: string,
//     ) {
//       super(name, favoriteFood);
//       this.addictedToShrimp = false;
//       this.isHungry = false;
//     }
//
//     private catCall() {
//       const intervalCall = setInterval(() => {
//         if (this.isHungry) {
//           console.log("I want to eat shrimp");
//         }
//       }, 1000);
//       return clearInterval(intervalCall);
//     }
//
//     intervalHungryMode() {
//       setTimeout(() => {
//         this.isHungry = true;
//         this.catCall();
//       }, 5000);
//     }
//
//     feedBy(food: Shrimp) {
//       if (food.isCooked && food.isPeeled) {
//         console.log(`${this.name} have ate ${food.name}`);
//         this.isHungry = false;
//         this.outToPlay();
//         this.intervalHungryMode();
//       } else {
//         console.log(
//           `${this.name} has to eat ${food.name} with both cooked and peeled`,
//         );
//       }
//     }
//
//     outToPlay() {
//       console.log(`${this.name} plays game out`);
//     }
//
//     wantToEatShrimp() {
//       this.isHungry = true;
//       this.catCall();
//     }
//   }
//
//   return new Cat("xiaoBai", "shrimp");
// }
export class Food {
  constructor(public name: string) {}
}

export class Meat extends Food {}

export class Shrimp extends Meat {
  isCooked: boolean;
  isPeeled: boolean;

  constructor(name: string) {
    super(name);
    this.isCooked = false;
    this.isPeeled = false;
  }

  cook() {
    this.isCooked = true;
  }

  peel() {
    this.isPeeled = true;
  }

  readyToBeFeeder() {
    this.isCooked = true;
    this.isPeeled = true;
  }
}

export class Animal {
  constructor(
    public name: string,
    public favoriteFood: string,
  ) {}

  eat(food: Food) {
    console.log(`${this.name} can have ${food.name}`);
  }

  outToPlay() {
    console.log(`${this.name} plays game out`);
  }
}

export class Cat extends Animal {
  private addictedToShrimp: boolean;
  private isHungry: boolean;

  constructor(
    public name: string,
    public favoriteFood: string,
  ) {
    super(name, favoriteFood);
    this.addictedToShrimp = false;
    this.isHungry = false;
  }

  private catCall() {
    const intervalCall = setInterval(() => {
      if (this.isHungry) {
        console.log("I want to eat shrimp");
      }
    }, 1000);
    return clearInterval(intervalCall);
  }

  intervalHungryMode() {
    setTimeout(() => {
      this.isHungry = true;
      this.catCall();
    }, 5000);
  }

  feedBy(food: Shrimp) {
    if (food.isCooked && food.isPeeled) {
      console.log(`${this.name} have ate ${food.name}`);
      this.isHungry = false;
      this.outToPlay();
      this.intervalHungryMode();
    } else {
      console.log(
        `${this.name} has to eat ${food.name} with both cooked and peeled`,
      );
    }
  }

  outToPlay() {
    console.log(`${this.name} plays game out`);
  }

  wantToEatShrimp() {
    this.isHungry = true;
    this.catCall();
  }
}
console.log(new Cat("xiaoBai", "shrimp"));
