var canvas = document.getElementById("canvas");

var selection = {
	
};

function writeMessage(canvas, message) {
	"use strict";
	
	var context = canvas.getContext("2d");
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = "18pt Calibri";
	context.fillStyle = "black";
	context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
	"use strict";
	
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

var mouseMoveListener = function (evt) {
	"use strict";
	
	var mousePos = getMousePos(canvas, evt);
	var message = "Mouse position " + mousePos.x + ", " + mousePos.y;
	writeMessage(canvas, message);
};

canvas.addEventListener("mousedown", function (evt) {
	"use strict";
	
	canvas.addEventListener("mousemove", mouseMoveListener, false);
}, false);

canvas.addEventListener("mouseup", function (evt) {
	"use strict";
	
	canvas.removeEventListener("mousemove", mouseMoveListener, false);
}, false);