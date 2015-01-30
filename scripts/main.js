$(document).ready(function () {
	"use strict";

	var selected	= new Selection(),
		canvas		= document.getElementById("canvas"),
		history		= new History(),
		domEvents	= events(canvas, selected, history);

	selected.item = new Line(new Point(0, 0), new Point(0, 0),
							$("#strokeColor").val(),
							$("#lineWidth").val());

	selected.lineColor	= $("#strokeColor").val();
	selected.lineWidth	= $("#lineWidth").val();
	selected.fillColor	= $("#fillColor").val();
	selected.font		= $("#font").val();
	selected.fontSize	= $("#fontSize").val();
});