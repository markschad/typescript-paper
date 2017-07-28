import * as React from "react";
import * as ReactDOM from "react-dom";

import { Universe } from "./components/Universe";

import * as paper from "paper";

ReactDOM.render(
	<Universe/>,
	document.getElementById("container")
);

const begin = () => {
	
	const canvas: HTMLCanvasElement = 
		document.getElementById("Universe") as HTMLCanvasElement;

	paper.setup(canvas);
	paper.settings.handleSize

	const path = new paper.Path();

	path.strokeColor = "black";

	const start = new paper.Point(100, 100);
	path.moveTo(start);
	path.lineTo(start.add([ 200, -50 ]));
	paper.view.draw();

}

console.log(document.readyState);

if (document.readyState === "interactive") {
	begin();
} else {
	window.onload = begin;
}


