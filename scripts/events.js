var events = function (canvas, shadowCanvas, creation, selection, history) {
	"use strict";
	
	var op = {},
		context = canvas.getContext("2d"),
		shadowContext = shadowCanvas.getContext("2d");
	/**
	Function button click handling
	**/
	$("#lineButton").click(function () {
		op = creation;
		op.selectOperation(0);
	});

	// Select a filled rectangle
	$("#rectFilled").click(function () {
		op = creation;
		op.selectOperation(1);
	});

	// Select an outlined rectangle
	$("#rectBorder").click(function () {
		op = creation;
		op.selectOperation(2);
	});

	// Select a filled rectangle with border
	$("#rectBoth").click(function () {
		op = creation;
		op.selectOperation(3);
	});

	// Select a filled circle
	$("#circFilled").click(function () {
		op = creation;
		op.selectOperation(4);
	});

	// Select an outlined circle
	$("#circBorder").click(function () {
		op = creation;
		op.selectOperation(5);
	});

	// Select a filled circle with border
	$("#circBoth").click(function () {
		op = creation;
		op.selectOperation(6);
	});

	$("#penButton").click(function () {
		op = creation;
		op.selectOperation(7);
	});

	$("#textButton").click(function () {
		var font = $("#fontButton").val();
		console.log("TextButton. font: ", font);
	});

	$("#moveButton").click(function () {
		op = selection;
		console.log("pressed move");
	});

	$("#saveButton").click(function () {
		$(".save-menu").toggleClass("hidden");
		console.log("saveButton");
	});
	
	$("#save-submit").click(function () {
		saveToApi(history.history, $("#username").val(), $("#drawing-name").val());
		$(".save-menu").toggleClass("hidden");
	});

	$("#loadButton").click(function () {
		console.log("loadButton");
	});

	$("#undoButton").click(function () {
		history.undo(canvas, context);
	});

	$("#redoButton").click(function () {
		history.redo(context);
	});

	$("#lineWidth").on("change", function () {
		creation.setLineWidth($("#lineWidth").val());
	});

	$("#strokeColor").on("change", function () {
		creation.setLineColor($("#strokeColor").val());
	});

	$("#fillColor").on("change", function () {
		creation.setFillColor($("#fillColor").val());
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
		
		if (op === creation){
			op.item.resize(shadowCanvas, shadowContext, mousePos);
		} else {
			op.moveShape(mousePos, history, canvas, context);
		}
	};

	shadowCanvas.addEventListener("mousedown", function (evt) {
		if (op === creation) {
			
			op.createShape(getMousePos(evt));
//			op.item.p1 = getMousePos(evt);
//			op.item.p2 = getMousePos(evt);
		} else {
			op.selectShape(getMousePos(evt), history);
		}

		shadowCanvas.addEventListener("mousemove",
									  mouseMoveListener, false);
	}, false);

	shadowCanvas.addEventListener("mouseup", function (evt) {
		shadowCanvas.removeEventListener("mousemove", mouseMoveListener, false);
		
		if (op === creation) {
			history.addShape(creation.item);
			history.drawHistory(canvas, context);

			shadowContext.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
			console.log(creation.item);
			creation.createShape(new Point(0, 0));
		} else {
			selection = new Selection();
		}
	}, false);
};