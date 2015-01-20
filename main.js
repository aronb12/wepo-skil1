var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

/**
* Draw blue line
*/
context.beginPath();
context.moveTo(0, 0);
context.lineTo(canvas.width, canvas.height);
context.lineWidth = 2;
context.strokeStyle = '#0000aa';
context.stroke();

/**
+ Draw red and black box
*/
context.beginPath();
context.rect(50, 50, 250, 250);
context.fillStyle = '#a51842';
context.lineWidth = 4;
context.strokeStyle = '#000000';
context.fill();
context.stroke();

/**
* Draw a blue and yellow circle
*/
var centerX		= 475;
var centerY		= 25;
var radius		= 25;
var diameter	= 2 * Math.PI;

context.beginPath();
context.arc(centerX, centerY, radius, diameter, false);
context.fillStyle	= "#0C396D";
context.strokeStyle	= "#ECEE00";
context.lineWidth	= 3;

context.fill();
context.stroke();

/**
* Draw some text
*/
context.font = "italic 40pt Calibri";
context.fillText("Hello World!", 0, 40);
