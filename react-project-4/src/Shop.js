import React from "react";
import Item from "./Item.js";
import { useState } from "react";

export default function Shop() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [validate, setValidate] = useState(false);
  const [items, setItems] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
    if (name.trim() && desc.trim()) {
      setValidate(false);
      setItems((prev) => [...prev, { id: items.length, name, desc }]);
      setName("");
      setDesc("");
    } else setValidate(true);
  };

  const deleteHandler = (id) => {
    setItems((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <>
      <form onSubmit={addItemHandler}>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="textfield"
            // required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="textfield"
            // required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          {validate && <div className="validation">Заполните все поля!</div>}
          <input type="submit" className="btn-basic" value="Добавить" />
        </div>
      </form>
      {items.length ? (
        <div />
      ) : (
        <div>
          <p>Добавьте первый товар</p>
        </div>
      )}
      <ul className="shop">
        {items.map((el) => (
          <li key={el.id}>
            <Item info={el} />
            <button className="btn-delete" onClick={() => deleteHandler(el.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
