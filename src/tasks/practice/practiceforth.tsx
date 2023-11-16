import React from "react";

const demo = {
  id: "asdo",
  title: "手机ipad笔记本双头Ty",
  from: "天猫",
  tags: ["单头", "Type-C", "充电"],
  discountPrice: 3.8,
  price: 5.8,
  views: 400,
};

type TaoBaoCargo = typeof demo;
export const Ggg: React.FC<{data:TaoBaoCargo[]}>=({data})=>{
  return (
  <div className="cargo-list">
    {data.map((cargo:TaoBaoCargo)=>(
        <div key={cargo.id} className="cargo">
            <h3>
                <span className="cargo-from">{cargo.from}</span>
                <span className="cargo-title">{cargo.title}</span>
            </h3>
        <div className="cargo-tag-list">
            {cargo.tags.map((tag:string)=>(
                <span key={tag} className="cargo-tag">{tag}</span>
            ))}
    
  </div>
  <div className="cargo-info">
    <span className="cargo-discount-price">${cargo.discountPrice}劵后价</span>
    <span className="cargo-price">{cargo.price}</span>
    <span className="cargo-views">{cargo.views}+人看过</span>
  </div>
  </div>
    ))}
    </div>
  )}
