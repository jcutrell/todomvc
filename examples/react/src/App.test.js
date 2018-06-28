import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoModel from "./todoModel";
const model = new TodoModel("react-todos");

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App model={model} />, div);
});
