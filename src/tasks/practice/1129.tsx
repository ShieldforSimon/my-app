import react from "react";
export function useTimer({
  hour,
  min,
  sec,
}: {
  hour: number;
  min: number;
  sec: number;
}) {
  return <div></div>;
}
// - [ ] 写一个计时器react hook，输入三个起始状态hour/min/sec 。它维护了3个状态 hour/min/sec
// ，每隔一秒sec加一，sec达到60后min加一….输出此变化的三个状态
