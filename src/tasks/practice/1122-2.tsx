import { useState } from "react";
import Table from "antd/es/table";
import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/es/form/Form";

class Person {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
class Teacher extends Person {
  superior: string;
  subordinate: "native" | "foreign";
  constructor(
    name: string,
    id: number,
    superior: string,
    subordinate: "native" | "foreign",
  ) {
    super(name, id);
    this.superior = superior;
    this.subordinate = subordinate;
  }
}
class Student extends Person {
  nation: "native" | "foreign";
  superior: string | "unsure";
  constructor(
    name: string,
    id: number,
    nation: "native" | "foreign",
    superior: string | "unsure",
  ) {
    super(name, id);
    this.nation = nation;
    this.superior = superior;
  }
}
class HeaderMaster extends Person {
  constructor(name: string, id: number) {
    super(name, id);
  }
}
class School {
  students: Student[];
  teachers: Teacher[];
  headmaster: HeaderMaster[];
  constructor(
    students: Student[],
    teachers: Teacher[],
    headmaster: HeaderMaster[],
  ) {
    this.students = students;
    this.teachers = teachers;
    this.headmaster = headmaster;
  }
  onBoard(x: Teacher) {
    return this.teachers.push(x);
  }
  resign(x: Teacher) {
    return this.teachers.filter((y) => y.name !== x.name);
  }
  admission(x: Student) {
    x.superior =
      this.teachers[
        Math.floor(
          Math.random() *
            (this.teachers.filter((y) => y.subordinate === `${x.nation}`)
              .length +
              1),
        )
      ].name;
    return this.students.push(x);
  }
  dropOut(x: Student) {
    return (this.students = this.students.filter((y) => y.name !== x.name));
  }
}
const teacherData: Teacher[] = [
  {
    name: "张老师",
    id: 31415926,
    superior: "刘校长",
    subordinate: "native",
  },
  {
    name: "李老师",
    id: 31415927,
    superior: "刘校长",
    subordinate: "native",
  },
  {
    name: "teacherBob",
    id: 1314520,
    superior: "刘校长",
    subordinate: "foreign",
  },
  {
    name: "teacherAlice",
    id: 1314521,
    superior: "刘校长",
    subordinate: "foreign",
  },
];
const studentData: Student[] = [
  {
    name: "二狗",
    id: 2324,
    superior: "张老师",
    nation: "native",
  },
  {
    name: "Jubilant",
    id: 1175,
    superior: "teacherBob",
    nation: "foreign",
  },
];
const headerMasterData: HeaderMaster[] = [
  {
    name: "刘校长",
    id: 10086,
  },
];
export function LogInSystem() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [studentsData, setStudentsData] = useState<Student[]>(studentData);
  const [teachersData, setTeachersData] = useState<Teacher[]>(teacherData);
  const [masterData, setHeaderMasterData] =
    useState<HeaderMaster[]>(headerMasterData);
  const [dataSource, setDataSource] = useState<any>(null);
  let midStudentData = studentData;

  setTeachersData(
    teachersData?.map((x: Teacher) => {
      x.superior = masterData[0].name;
      return x;
    }),
  );
  const resignedTeachers = teachersData;
  const nativeTeachers: Teacher[] = teachersData.filter(
    (item: Teacher) => item.subordinate === "native",
  );
  const foreignTeachers: Teacher[] = teachersData.filter(
    (item: Teacher) => item.subordinate === "foreign",
  );
  resignedTeachers.forEach((item) => {
    midStudentData = studentsData.map((y) => {
      if (y.superior === item.name) {
        y.superior = "unsure";
      }
      return y;
    });
    return midStudentData;
  });
  setStudentsData(
    midStudentData
      .filter((z: any) => !(z.state === "graduate"))
      .filter((item: Student) => {
        if (item.superior === "true") {
          if (item.nation === "native") {
            item.superior =
              nativeTeachers[
                Math.floor(Math.random() * (teachersData.length + 1))
              ].name;
          } else {
            item.superior =
              foreignTeachers[
                Math.floor(Math.random() * (teachersData.length + 1))
              ].name;
          }
        }
      }),
  );
  setDataSource([...studentsData, ...teachersData, ...masterData]);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "职工号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
    },
  ];
  const [form] = Form.useForm();
  return (
    <>
      <Button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      ></Button>
      <Table dataSource={dataSource} columns={columns} />
      <Drawer
        title="学生信息"
        width={800}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Form form={form}></Form>
        <Button
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setIsDrawerOpen(false);
          }}
        >
          submit
        </Button>
      </Drawer>
    </>
  );
}
// // 场景：
// // 学校人员管理，角色：一个学校，多个老师，多个学生，一个校长
// // 此管理系统中：
// // 所有人员都具有一个职工号和姓名。
// // 教师及管理类人员有入职、离职。
// // 学生可以入学、毕业、辍学，入学时随机分配到一个老师。
// // 一个教师下有多个学生。
// // 部分教师可以且只能管理留学生。
// // 校长下管理所有教师。
// // - [ ] 题1-4：请你使用代码描述这些功能（难度4，耗时4）
// // - [ ] 题5-6：请编写一个界面，展示当前学校的所有人员及信息。（难度1，耗时3）
// // - [ ] 题7-8：页面上有一个入学按钮，可以录入学生信息并入学。页面上有一个入职按钮，可以录入教师信息并入职。（难度1，耗时2）
