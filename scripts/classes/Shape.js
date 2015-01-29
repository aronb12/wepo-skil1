/**
A superclass for complex shapes.
Is not intended to be instantiated
**/
var Shape = Base.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Shapes start point
	@param {Point}	p2* Shapes end point
	@param {string}	strokeColor* Shapes line color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth) {
		"use strict";
		
		this.p1 = p1;
		this.p2 = p2;
		this.strokeColor = strokeColor;
		this.lineWidth = lineWidth;
	},
	
	/**
	A draw function for shapes.
	Is only a single line of code that is executed by all shapes.
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (canvas) {
		"use strict";
		
		canvas.beginPath();
	}
});