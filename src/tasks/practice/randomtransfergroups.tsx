// 左右两个人员列表（显示姓名即可），初始的时候，左边有50个人，右边是空的，两个列表中间有一个按钮，每点一下将左侧随机2-10个人转移到右边
import React, { useState } from "react";
import "./randomtransfergroups.css";

type datatype = { id: number; name: string };

export const Transfername: React.FC<{ comps: datatype[] }> = ({ comps }) => {
  const [ll, setLl] = useState<number[]>(comps.map((a: datatype) => a.id));
  const [rr, setRr] = useState<number[]>([]);

  const renderList = (list: number[]) =>
    comps
      .filter((b: datatype) => list.includes(b.id))
      .map((b) => <div key={b.id}>{b.name}</div>);

  return (
    <div className="fatherframe">
      <div className="first-child">{renderList(ll)}</div>

      <button
        onClick={() => {
          let transferTimes: number = Math.floor(Math.random() * 9 + 2);

          if (transferTimes > ll.length) {
            transferTimes = ll.length;
          }
          let randomorder = ll.slice(0).sort((a, b) => Math.random() - 0.5);
          setRr([...rr,...randomorder.filter((a,index)=>index<transferTimes?a:false)]);
          setLl(randomorder.filter((a,index)=>index>=transferTimes?a:false));
        }}
      >
        点击转移姓名
      </button>

      <div>{renderList(rr)}</div>
    </div>
  );
};
