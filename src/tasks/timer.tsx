import React, { useState, useEffect } from "react";

export function Timercomps() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  const hour =
    Math.floor(count / 3600) < 10
      ? "0" + Math.floor(count / 3600).toString()
      : Math.floor(count / 3600);
  const min =
    Math.floor((count % 3600) / 60) < 10
      ? "0" + Math.floor((count % 3600) / 60).toString()
      : Math.floor((count % 3600) / 60);
  const sec =
    Math.floor((count % 3600) % 60) < 10
      ? "0" + Math.floor((count % 3600) % 60).toString()
      : Math.floor((count % 3600) % 60);
  return (
    <div className="h1">
      <div className="h21">{hour + ":" + min + ":" + sec}</div>
      <div className="h22">时间</div>
    </div>
  );
}
