import React from "react";

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name">Name: </label>
        <input
          type="text"
          placeholder="Название товара"
          className="textfield"
          id="item-name"
          value={props.name}
          onChange={props.onNameFormChange}
        />
      </div>
      <div>
        <label htmlFor="item-desc">Description: </label>
        <input
          type="text"
          placeholder="Описание товара"
          className="textfield"
          id="item-desc"
          value={props.desc}
          onChange={props.onDescFormChange}
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.validation}</div>
        <input type="submit" className="btn-basic" value="Добавить" />
      </div>
    </form>
  );
}
