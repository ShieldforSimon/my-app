import react from "react";
import * as string_decoder from "string_decoder";
class FactoryReset {
  constructor(
    public name: string,
    public serialNumber: number,
  ) {}
  restore() {
    console.log("this.camera was be restored");
  }
  destroy() {
    console.log("this.camera was be destroyed");
  }
}
class Works {
  private straightMark: number;
  private allStraightMark: null | boolean;
  price: number;

  static basicPrice: 20;
  static discount: number;
  constructor(straightMark: number, allStraightMark: boolean) {
    this.straightMark = straightMark;
    this.allStraightMark = allStraightMark;
    this.price = (Works.basicPrice + this.straightMark) * Works.discount;
  }
}
class Camera extends FactoryReset {
  constructor(name: string, serialNumber: number) {
    super(name, serialNumber);
  }
  takePhoto(actors: Actor[], scene: Scene) {
    if (actors.length > 0 && scene !== null) {
      let gayGender = actors.map((item) => item.sexGender);
      if (actors.length > 2 && gayGender.includes("straight")) {
        if (!gayGender.includes("gay")) {
          return new Works(1, true);
        } else {
          return new Works(1, false);
        }
      } else {
        return new Works(0, false);
      }
    }
  }
}

class LubricatingOil extends FactoryReset {
  private state = false;
  constructor(name: string, serialNumber: number) {
    super(name, serialNumber);
  }
}

class Computer extends FactoryReset {
  constructor(name: string, serialNumber: number) {
    super(name, serialNumber);
  }
}
class Person {
  gender: "man";
  profession: "actor" | "photographer" | "lightingEngineer" | "setDecorator";
  sexGender: "gay" | "straight";
  constructor(
    profession: "actor" | "photographer" | "lightingEngineer" | "setDecorator",
    sexGender: "gay" | "straight",
  ) {
    this.profession = profession;
    this.sexGender = sexGender;
    this.gender = "man";
  }
}
class Photographer extends Person {
  profession: "photographer";
  private camera: Camera;
  constructor(
    profession: "photographer",
    sexGender: "gay" | "straight",
    camera: Camera,
  ) {
    super(profession, sexGender);
    this.profession = profession;
    this.camera = camera;
  }
}

class Scene {
  private content: string | null;
  constructor(content: string | null) {
    this.content = content;
  }
  useScene() {
    return this.content;
  }
}
class LightingEngineer extends Person {
  profession: "lightingEngineer";
  constructor(profession: "lightingEngineer", sexGender: "gay" | "straight") {
    super(profession, sexGender);
    this.profession = profession;
  }
  layoutScene() {
    return new Scene("new scene has been worked");
  }
}

class SetDecorator extends Person {
  profession: "setDecorator";
  constructor(profession: "setDecorator", sexGender: "gay" | "straight") {
    super(profession, sexGender);
    this.profession = profession;
  }
}

class Actor extends Person {
  constructor(profession: "actor", sexGender: "straight" | "gay") {
    super(profession, sexGender);
    this.profession = profession;
  }
  act(lubricatingOils: LubricatingOil[], scene: Scene) {
    if (lubricatingOils.length > 0 && scene !== null) {
      console.log("acted");
      lubricatingOils.forEach((item: LubricatingOil) => item.destroy());
    }
  }
}

// 在一个GV拍摄工厂.
// 有以下几种物品
// 1. 摄像头,电脑,可以被工作人员持有
// 2. 润滑油,可以被演员持有
// 3. 所有物品均为公司资产,具有资产编号
// 4. 资产可以被回收和销毁
//
//
// GV拍摄工厂有以下功能
// 1. 灯光师可以布置场景
// 2. 拍摄师可以使用摄像头拍摄GV. 且至少需要1位演员和一个场景. 且生产出一部GV
// 3. 演员具有一个表演的动作, 但是表演至少需要一个润滑油和一个场景
// 4. 润滑油使用后被销毁
// 5. 如果拍摄的GV中人数大于2且至少包含一个直男,GV会具有一个[直男]标记,如果全部为直男会具有一个[全直男]标记
// 6. GV的售价: (基础价格+ N * 10) * 折扣  (N为标记数量)
