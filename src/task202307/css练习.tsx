import React, { useState, useEffect } from "react";

// const likes = [
//   { id: 1, item: "movie" },
//   { id: 2, item: "sport" },
//   { id: 3, item: "food" },
//   { id: 4, item: "skiing" },
// ];
// type dataType = typeof likes;
// type itemType = {
//   id: number;
//   item: string;
// };

// export const Buttonchecks: React.FC<{ comps: dataType }> = ({ comps }) => {
//   const [checked, setChecked] = useState<number[]>([]);

//   return (
//     <div className="comps">
//       {comps.map((comp: itemType) => (
//         <div
//           className="comp"
//           key={comp.id}
//           onClick={() => {
//             if (checked.includes(comp.id)) {
//               setChecked(checked.filter((c) => c !== comp.id));
//             } else {
//               setChecked([...checked, comp.id]);
//             }
//           }}
//           style={{
//             color: checked.includes(comp.id) ? "white" : "black",
//             // backgroundColor: checked.includes(comp.id) ? "blue" : "white",
//           }}
//         >
//           {comp.item}
//         </div>
//       ))}
//     </div>
//   );
// };

