/**
Rectangle shape that can be drawn on a canvas.
**/
var Rectangle = Shape.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Rectangle start point
	@param {Point}	p2* Rectangle end point
	@param {string}	strokeColor* Rectangles line color
	@param {string}	fillColor* Rectangles fill color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth, fillColor) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
		this.fillColor = fillColor;
		this.width = this.getWidth();
		this.height = this.getHeight();
		this.drawFinish = this.drawSelections[0];
	},
	
	/**
	A function for calculating the height of the rectangle
	
	@return {number} The rectangle height as a number
	**/
	getHeight: function () {
		"use strict";
		
		return this.p2.y - this.p1.y;
	},
	
	/**
	A function for calculating the width of the rectangle
	
	@return {number} The rectangle width as a number
	**/
	getWidth: function () {
		"use strict";
		
		return this.p2.x - this.p1.x;
	},
	
	/**
	Function that acts as an event listener when the mouse is moved on the canvas
	**/
	mouseMove: function (canvas, context, p) {
		"use strict";
		
		this.p2 = p;
		this.width = this.getWidth();
		this.height = this.getHeight();
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		this.draw(context);
	},
	
	/**
	Function for drawing on canvas
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (context) {
		"use strict";
		
		this.base(context);
		context.rect(this.p1.x, this.p1.y, this.width, this.height);
		this.drawFinish(context);
	},
	
	/**
	An array of functions for drawing the rectangle.
	**/
	drawSelections: [
		
		/**
		Function for drawing a filled rectangle on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (context) {
			"use strict";
			
			context.fillStyle = this.fillColor;
			context.fill();
		},
		
		/**
		Function for drawing a rectangle border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (context) {
			"use strict";
			
			context.lineWidth = this.lineWidth;
			context.strokeStyle = this.strokeColor;
			context.stroke();
		},
		
		/**
		Function for drawing a filled rectangle with border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (context) {
			"use strict";
			
			context.fillStyle = this.fillColor;
			context.fill();
			context.lineWidth = this.lineWidth;
			context.strokeStyle = this.strokeColor;
			context.stroke();
		}
	],
	
	/**
	Function for changing the selected drawing function
	
	@param {number} index* The index of the function in the drawSelection array
	**/
	selectDraw: function (index) {
		"use strict";
		
		this.drawFinish = this.drawSelections[index];
	}
});