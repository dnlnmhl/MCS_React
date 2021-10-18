import React, { useState } from "react";
import uuid from "react-uuid";

import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [validation, setValidation] = useState("");

  function handleDeleteClick(id) {
    setItems(items.filter((el) => el.id !== id));
  }

  function handleFormSubmit(e) {
    const item = { id: uuid(), name: name, desc: desc };
    const newItem = [...items, item];

    if (name && desc) {
      e.preventDefault();
      setItems(newItem);
      setName("");
      setDesc("");
      setValidation();
    } else {
      e.preventDefault();
      setValidation("Не все поля заполнены");
      return validation;
    }
  }

  function handleNameFormChange(e) {
    setName(e.target.value);
  }

  function handleDescFormChange(e) {
    setDesc(e.target.value);
  }

  function firstItemRender() {
    if (items.length === 0) return <p>Добавьте первый товар</p>;
  }

  return (
    <>
      <AddItem
        onNameFormChange={handleNameFormChange}
        onDescFormChange={handleDescFormChange}
        onFormSubmit={handleFormSubmit}
        desc={desc}
        name={name}
        validation={validation}
      />
      <div>{firstItemRender()}</div>
      <ItemsList onDeleteClick={handleDeleteClick} items={items} />
    </>
  );
}
