$(document).ready(function () {
	"use strict";

	var creation		= new Creation(),
		selection		= new Selection(),
		canvas			= document.getElementById("canvas"),
		shadowCanvas	= document.getElementById("shadowCanvas"),
		history			= new History(),
		domEvents		= events(canvas, shadowCanvas, creation, selection, history);

	selection.item = new Line(new Point(0, 0), new Point(0, 0),
							$("#strokeColor").val(),
							$("#lineWidth").val());

	selection.lineColor	= $("#strokeColor").val();
	selection.lineWidth	= $("#lineWidth").val();
	selection.fillColor	= $("#fillColor").val();
	selection.font		= $("#font").val();
	selection.fontSize	= $("#fontSize").val();
});