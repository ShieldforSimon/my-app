import React, { useState, useEffect } from "react";
import "./checkedsonglists.css";

// 题2：一个歌单列表，渲染歌名和歌手即可。
// 第一首歌为正在播放的歌。应该做样式区分强调是正在播放。
// 每首歌右侧：实现置顶和删除两个按钮。
// 此外，歌单第一首歌多一个切歌按钮，第一首歌无删除按钮
// 歌单最底部还有个随机打乱顺序按钮（不可打乱第一首）。

type song = {
  id: number;
  name: string;
  owner: string;
};

export const SongsOperation: React.FC<{ comps: song[] }> = ({ comps }) => {
  const [played, setPlayed] = useState(comps);
  const clicktoorderrandom = () => {
    let randomarr = played
      .filter((x, index) => index !== 0)
      .sort(() => Math.random() - 0.5);
    setPlayed([...played.slice(0, 1), ...randomarr]);
  };

  return (
    <div className="allframe">
      <div>
        {played.slice(0, 1).map((b) => (
          <div className="song first-song" key={b.id}>
            <div key={b.id} className="name">
              {b.name}{" "}
            </div>
            <div key={b.id} className="owner">
              歌手:{b.owner}
            </div>
            <button className="changetotop">置顶</button>
            <button className="next">切歌</button>
          </div>
        ))}
      </div>

      <div className="tobeplayed">
        {played.slice(1).map((b, index: number) => {
          const clicktotop = () => {
            let totopresult: song[] = [];
            const excludeMe = played.filter((x) => x !== b);
            totopresult = [b, ...excludeMe];
            setPlayed(totopresult);
          };
          const clicktodelete = () => {
            const deleteMe = played.filter((x) => x !== b);
            setPlayed(deleteMe);
          };
          return (
            <>
              <div className="song" key={b.id}>
                <div className="name">{b.name}</div>
                <div className="owner">歌手:{b.owner}</div>
                <button className="changetotop" onClick={clicktotop}>
                  置顶
                </button>
                <button className="delete" onClick={clicktodelete}>
                  删除
                </button>
              </div>
            </>
          );
        })}
      </div>
      <button onClick={clicktoorderrandom}>乱序</button>
    </div>
  );
};
