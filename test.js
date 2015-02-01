var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

///**
//* Draw blue line
//*/
//context.beginPath();
//context.moveTo(0, 0);
//context.lineTo(canvas.width, canvas.height);
//context.lineWidth = 2;
//context.strokeStyle = '#0000aa';
//context.stroke();
//
///**
//+ Draw red and black box
//*/
//context.beginPath();
//context.rect(50, 50, 250, 250);
//context.fillStyle = '#a51842';
//context.lineWidth = 4;
//context.strokeStyle = '#000000';
//context.fill();
//context.stroke();
//
///**
//* Draw a blue and yellow circle
//*/
//var centerX		= 475;
//var centerY		= 25;
//var radius		= 25;
//var diameter	= 2 * Math.PI;
//
//context.beginPath();
//context.arc(centerX, centerY, radius, diameter, false);
//context.fillStyle	= "#0C396D";
//context.strokeStyle	= "#ECEE00";
//context.lineWidth	= 3;
//
//context.fill();
//context.stroke();
//
///**
//* Draw some text
//*/
//context.font = "italic 40pt Calibri";
//context.fillText("Hello World!", 0, 40);

// Test shapes

// Points to test our shapes with
var center = new Point(500, 225);

var topLeft = new Point(300, 25);
var topRight = new Point(700, 25);
var bottomLeft = new Point(300, 425);
var bottomRight = new Point(700, 425);

// Rectangles
var r1 = new Rectangle(center, topRight, "red", 2, "teal");
var r2 = new Rectangle(center, topLeft, "red", 2, "blue");
var r3 = new Rectangle(center, bottomRight, "red", 2, "yellow");
var r4 = new Rectangle(center, bottomLeft, "red", 2, "gray");

r1.draw(context);
r2.draw(context);
r3.draw(context);
r4.draw(context);

// Circles
var c1 = new Circle(center, topRight, "red", 2, "teal");
var c2 = new Circle(center, topLeft, "red", 2, "blue");
var c3 = new Circle(center, bottomRight, "red", 2, "yellow");
var c4 = new Circle(center, bottomLeft, "red", 2, "gray");

c1.selectDraw(2);
c2.selectDraw(2);
c3.selectDraw(2);
c4.selectDraw(2);

c1.draw(context);
c2.draw(context);
c3.draw(context);
c4.draw(context);
	
// Lines

var l1 = new Line(topLeft, bottomRight, "black", 1);
var l2 = new Line(bottomLeft, topRight, "black", 1);

l1.draw(context);
l2.draw(context);

// Delimiter lines
var vLeftTop = new Point(300, 0);
var vLeftBottom = new Point(300, 450);

var vCenterTop = new Point(500, 0);
var vCenterBottom = new Point(500, 450);

var vRightTop = new Point(700, 0);
var vRightBottom = new Point(700, 450);

var hTopRight = new Point(0, 25);
var hTopLeft = new Point(1000, 25);

var hCenterLeft = new Point(0, 225);
var hCenterRight = new Point(1000, 225);

var hBottomLeft = new Point(0, 425);
var hBottomRight = new Point(1000, 425);

var vLineLeft = new Line(vLeftTop, vLeftBottom, "black", 1);
var vLineRight = new Line(vRightTop, vRightBottom, "black", 1);
var vLineCenter = new Line(vCenterTop, vCenterBottom, "black", 1);

var hLineTop = new Line(hTopLeft, hTopRight, "black", 1);
var hLineCenter = new Line(hCenterLeft, hCenterRight, "black", 1);
var hLineBottom = new Line(hBottomLeft, hBottomRight, "black", 1);

vLineLeft.draw(context);
vLineCenter.draw(context);
vLineRight.draw(context);

hLineTop.draw(context);
hLineCenter.draw(context);
hLineBottom.draw(context);

var skinnyLine = new Line(new Point(2, 300), new Point(2, 310), "black", 1);

var thickLine = new Line(new Point(10, 305), new Point(200, 305), "black", 10);

skinnyLine.draw(context);
thickLine.draw(context);

var savedObjects = [
	vLineCenter,
	vLineLeft,
	vLineRight
];

var jsonSaved = JSON.stringify(savedObjects);

var param = {
	"user":		"arona12",
	"name":		"test2",
	"content":	jsonSaved,
	"template":	false
};
//
//$.ajax({
//	type:			"POST",
//	contentType:	"application/json; charset=utf-8",
//	url:			"http://whiteboard.apphb.com/Home/Save",
//	data:			param,
//	dataType:		"jsonp",
//	crossDomain:	true,
//	success:		function (data) {
//		"use strict";
//		console.log("SUCCESS!!");
//		console.log(data);
//	},
//	error:			function (xhr, err) {
//		"use strict";
//		console.log("ERROR!!");
//		console.log(xhr);
//		console.log(err);
//	}
//});

$.ajax({
	type: "POST",
	contentType: "application/json; charset=utf-8",
	url: "http://whiteboard.apphb.com/Home/GetList",
	data: {"user": "arona12", "template": false},
	dataType: "jsonp",
	crossDomain: true,
	success: function (data) {
		console.log("SUCCESS!!");
		console.log(data);
	},
	error: function (xhr, err) {
		console.log("ERROR!!");
		console.log(xhr);
		console.log(err);
	}
});

//$.ajax({
//	type: "POST",
//	contentType: "application/json; charset=utf-8",
//	url: "http://whiteboard.apphb.com/Home/GetWhiteboard",
//	data: {"id": 2234},
//	dataType: "jsonp",
//	crossDomain: true,
//	success: function (data) {
//		console.log("SUCCESS!!");
//		console.log(data);
//	},
//	error: function (xhr, err) {
//		console.log("ERROR!!");
//		console.log(xhr);
//		console.log(err);
//	}
//});

//var i = getList("arona12");
//i.done(function () {
//	console.log(i);
//});
//console.log(i.success())
//saveToApi([new Line(new Point(0, 0),
//					new Point(100, 100),
//					"black",
//					4)],
//		  "arona12",
//		  "functiontest");

