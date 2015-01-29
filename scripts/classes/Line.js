/**
A single line that can be drawn on a canvas
**/
var Line = Shape.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Lines start point
	@param {Point}	p2* Lines end point
	@param {string}	strokeColor* Lines color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
	},
	
	/**
	Draw function to draw the line on a canvas
	
	@param {object} canvas* The canvas context to be drawn on.
	**/
	draw: function (canvas) {
		"use strict";
		
		this.base(canvas);
		canvas.moveTo(this.p1.x, this.p1.y);
		canvas.lineTo(this.p2.x, this.p2.y);
		canvas.lineWidth = this.lineWidth;
		canvas.strokeStyle = this.strokeColor;
		canvas.stroke();
	}
});