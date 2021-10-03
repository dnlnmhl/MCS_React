import React from "react";
import { render } from "react-dom";

function Navbar(props) {
  return (
    <>
      <div>
        Привет, {props.user.first_name} {props.user.last_name}
      </div>
      <p>У вас {props.alerts.length} уведомлений</p>
    </>
  );
}

let alerts = [
  {
    id: 1,
    text: "Оплата успешна"
  },
  {
    id: 2,
    text: "Заказ отправлен"
  }
];

const user = {
  first_name: "Михаил",
  last_name: "Данилин"
};

const root = document.querySelector("#root");

render(<Navbar alerts={alerts} user={user} />, root);
