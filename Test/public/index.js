import React from "react";
import {render} from "react-dom";

const root = document.querySelector("#root");
render(React.createElement("h1", {}, "Yo!"), root);
