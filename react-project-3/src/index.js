import React from "react";
import { render } from "react-dom";
import Button from "./Button";
import Shop from "./Shop";

function App() {
  return (
    <Button>
      <Shop />
    </Button>
  );
}

render(<App />, document.querySelector("#root"));
