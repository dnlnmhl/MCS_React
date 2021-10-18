import React from "react";
import Item from "./Item";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image: "https://source.unsplash.com/400x300/?3M,mask"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://source.unsplash.com/400x300/?latex,gloves"
    }
  ];

  return (
    <div className="shop">
      <Item name={items[0].name} desc={items[0].desc} src={items[0].image} />
      <Item name={items[1].name} desc={items[1].desc} src={items[1].image} />
    </div>
  );
};

export default Shop;
