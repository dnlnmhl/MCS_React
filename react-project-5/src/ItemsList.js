import React from "react";
import Item from "./Item.js";

export default function ItemsList(props) {
  const itemListRender = props.items.map((item) => {
    return (
      <li key={item.id}>
        <Item info={item} />
        <button
          className="btn-delete"
          onClick={() => props.onDeleteClick(item.id)}
        >
          Удалить
        </button>
      </li>
    );
  });

  return <ul className="shop">{itemListRender}</ul>;
}
