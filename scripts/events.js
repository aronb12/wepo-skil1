var events = function (canvas, selection, history) {
	"use strict";
	var context = canvas.getContext("2d");
	/**
	Function button click handling
	**/
	$("#lineButton").click(function () {
		console.log("lineButton");
	});

	// Select a filled rectangle
	$("#rectFilled").click(function () {
		selection.selectOperation(1);
	});

	// Select an outlined rectangle
	$("#rectBorder").click(function () {
		selection.selectOperation(2);
	});

	// Select a filled rectangle with border
	$("#rectBoth").click(function () {
		selection.selectOperation(3);
	});

	// Select a filled circle
	$("#circFilled").click(function () {
		selection.selectOperation(4);
	});

	// Select an outlined circle
	$("#circBorder").click(function () {
		selection.selectOperation(5);
	});

	// Select a filled circle with border
	$("#circBoth").click(function () {
		selection.selectOperation(6);
	});

	$("#penButton").click(function () {
		console.log("penButton");
	});

	$("#saveButton").click(function () {
		console.log("saveButton");
	});

	$("#loadButton").click(function () {
		console.log("loadButton");
	});

	$("#textButton").click(function () {
		var font = $("#fontButton").val();
		console.log("TextButton. font: ", font);
	});

	$("#undoButton").click(function () {
		console.log("undoButton");
	});

	$("#redoButton").click(function () {
		console.log("redoButton");
	});

	$("#lineWidth").on("change", function () {
		selection.setLineWidth($("#lineWidth").val());
//		var lineWidth = $("#lineWidth").val();
//		console.log("LineWidth: ", lineWidth);
	});

	$("#strokeColor").on("change", function () {
		selection.setLineColor($("#strokeColor").val());
//		var color = $("#strokeColor").val();
//		console.log("strokeColor", color);
	});

	$("#fillColor").on("change", function () {
		selection.setFillColor($("#fillColor").val());
//		var color = $("#fillColor").val();
//		console.log("fillColor", color);
	});

	$("#font").on("change", function () {
		var font = $("#font").val();
		console.log("Font: ", font);
	});

	$("#fontSize").on("change", function () {
		var fontSize = $("#fontSize").val();
		console.log("Font size: ", fontSize);
	});

	/**
	Function for returning mouse position

	@param {object} canvas* The canvas context to be observing
	@param {event} event that is logged
	@return {number, number} x and y postition
	**/
	function getMousePos(evt) {

		var rect = canvas.getBoundingClientRect();
		return new Point(evt.clientX - rect.left, evt.clientY - rect.top);
	}

	/**
	Function that listens for mouse movement

	@param {event}  mousemove
	**/
	var mouseMoveListener = function (evt) {
		var mousePos = getMousePos(evt);
		
		selection.item.mouseMove(canvas, context, mousePos);
	};

	canvas.addEventListener("mousedown", function (evt) {
		selection.createShape();
		selection.item.p1 = getMousePos(evt);
		selection.item.p2 = getMousePos(evt);

		canvas.addEventListener("mousemove", mouseMoveListener, false);
	}, false);

	canvas.addEventListener("mouseup", function (evt) {
		canvas.removeEventListener("mousemove", mouseMoveListener, false);
		history.addShape(selection.item);
		history.drawHistory(canvas, context);
		selection.createShape();
	}, false);
};