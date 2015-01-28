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


var p1 = new Point(1, 1);
var p2 = new Point(23, 22);

var rect = new Rectangle(p1, p2, "red", 4, "blue");

rect.selectDraw(0);
rect.draw(context);

rect.selectDraw(1);
//rect.draw(context);
//
rect.selectDraw(2);
//rect.draw(context);

var p3 = new Point(250, 125);
var p4 = new Point(100, 450);

var circ = new Circle(p3, p4, "black", 3, "red");

//circ.draw(context);

//circ.selectDraw(1);
//circ.draw(context);

circ.selectDraw(2);
circ.draw(context);