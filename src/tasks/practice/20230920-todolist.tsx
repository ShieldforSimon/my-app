import React, { useState, useEffect } from "react";
import "./20230920-todolist.css";

type list = {
  id: number;
  title: string;
  schedule: boolean;
};

export const Todolists: React.FC<{ comps: list[] }> = ({ comps }) => {
  const todolists = comps.filter((comp: list) => comp.schedule === false);
  const donelists = comps.filter((comp: list) => comp.schedule === true);
  const [todo, setTodo] = useState<list[]>(todolists);
  const [done, setDone] = useState<list[]>(donelists);

  return (
    <div className="father">
      <div className="left-child">
        {todo.map((a: list) => (
          <div key={a.id}>
            <div>{a.title}</div>
            <button
              onClick={() => {
                const clicktodo = todo.filter((c: list) => c !== a);
                setTodo(clicktodo);
                setDone([...done, a]);
              }}
            >
              点击完成
            </button>
          </div>
        ))}
      </div>
      <div className="right-chlid">
        {done.map((a: list) => (
          <div key={a.id}>
            <div>{a.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
