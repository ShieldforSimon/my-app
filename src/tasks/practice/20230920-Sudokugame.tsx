import React, { useState, useEffect } from "react";
import "./20230920-Sudokugame.css";

type clickstate = {
  id: number;
  camp: null | "O" | "X" | "";
  done: boolean;
};

const sudokugamearr: clickstate[] = [
  { id: 1, camp: "", done: false },
  { id: 2, camp: "", done: false },
  { id: 3, camp: "", done: false },
  { id: 4, camp: "", done: false },
  { id: 5, camp: "", done: false },
  { id: 6, camp: "", done: false },
  { id: 7, camp: "", done: false },
  { id: 8, camp: "", done: false },
  { id: 9, camp: "", done: false },
];

export function Soduku() {
  const [arr, setArr] = useState(sudokugamearr);
  const [times, setTimes] = useState(0);

  return (
    <div className="sudokugamearr">
      {arr.map((x: clickstate, index) => (
        <button
          className="block"
          key={x.id}
          onClick={() => {
            if (!x.done) {
              setTimes(times + 1);
              times % 2 === 0 ? (x.camp = "O") : (x.camp = "X");
              x.done = true;
              setArr(arr.slice(0));
            }
          }}
        >
          {x.camp}
        </button>
      ))}
    </div>
  );
}
function c(a: clickstate, b: clickstate): number {
  throw new Error("Function not implemented.");
}
