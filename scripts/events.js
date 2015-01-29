var canvas = document.getElementById("canvas");

var selection = {
	
};
/**
Function button click handling
**/
$("#lineButton").click(function () {
    "use strict";
    console.log("lineButton");
});

$("#rectFilled").click(function () {
    "use strict";
    console.log("rectFilled");
});

$("#rectBorder").click(function () {
    "use strict";
    console.log("rectBorder");
});

$("#rectBoth").click(function () {
    "use strict";
    console.log("rectBoth");
});

$("#circFilled").click(function () {
    "use strict";
    console.log("circFilled");
});

$("#circBorder").click(function () {
    "use strict";
    console.log("circBorder");
});

$("#circBoth").click(function () {
    "use strict";
    console.log("circBoth");
});

$("#penButton").click(function () {
    "use strict";
    console.log("penButton");
});

$("#saveButton").click(function () {
    "use strict";
    console.log("saveButton");
});

$("#loadButton").click(function () {
    "use strict";
    console.log("loadButton");
});

$("#textButton").click(function () {
    "use strict";
    var font = $("#fontButton").val();
    console.log("TextButton. font: ", font);
});

$("#undoButton").click(function () {
    "use strict";
    console.log("undoButton");
});

$("#redoButton").click(function () {
    "use strict";
    console.log("redoButton");
});

$("#lineWidthButton").on("change", function () {
    "use strict";
    var lineWidth = $("#lineWidthButton").val();
    console.log("LineWidth: ", lineWidth);
});

$("#strokeColor").on("change", function () {
    "use strict";
    var color = $("#strokeColor").val();
    console.log("strokeColor", color);
});

$("#fillColor").on("change", function () {
    "use strict";
    var color = $("#fillColor").val();
    console.log("fillColor", color);
});

$("#fontButton").on("change", function () {
    "use strict";
    var font = $("#fontButton").val();
    console.log("Font: ", font);
});

$("#fontSizeButton").on("change", function () {
    "use strict";
    var fontSize = $("#fontSizeButton").val();
    console.log("Font size: ", fontSize);
});
/**
Function for returning mouse position

@param {object} canvas* The canvas context to be observing
@param {event} event that is logged
@return {number, number} x and y postition
**/
function getMousePos(canvas, evt) {
	"use strict";
	
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

/**
Function that listens for mouse movement

@param {event}  mousemove
**/
var mouseMoveListener = function (evt) {
	"use strict";
	
	var mousePos = getMousePos(canvas, evt);
};

canvas.addEventListener("mousedown", function (evt) {
	"use strict";
	
	canvas.addEventListener("mousemove", mouseMoveListener, false);
}, false);

canvas.addEventListener("mouseup", function (evt) {
	"use strict";
	
	canvas.removeEventListener("mousemove", mouseMoveListener, false);
}, false);