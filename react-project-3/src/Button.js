import React, { useState } from "react";

export default function Button(props) {
  const { children } = props;
  let [authed, setAuth] = useState(false);

  function handleButtonClick() {
    authed ? setAuth(false) : setAuth(true);
  }

  const login = (
    <>
      <h2>Нужно залогиниться!</h2>
      <button onClick={handleButtonClick}>Войти</button>
    </>
  );
  const logout = (
    <>
      <button onClick={handleButtonClick}>Выйти</button>
      {children}
    </>
  );

  return authed ? logout : login;
}
