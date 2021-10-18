import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function Shop() {
  const [items, setItems] = useState();

  useEffect(() => {
    (async () => {
      try {
        const responce = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await responce.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!items) {
    return null;
  }
  return (
    <div className="shop">
      <h1>Товаров: {items.length} </h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} info={item} />
        ))}
      </ul>
    </div>
  );
}
