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
	
	@param {object} canvas* The canvas to be drawn on
	@param {object} context* The canvas context
	@param {Point} p* The point to which the user has dragged the mouse
	**/
	resize: function (canvas, context, p) {
		"use strict";
		
		this.p2 = p;
		this.width = this.getWidth();
		this.height = this.getHeight();
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		this.draw(context);
	},
	
	/**
	Function for altering the location of the rectangle
	
	@param {number} deltaX* Movement on the x-axis
	@param {number} deltaY* Movement on the y-axis
	**/
	move: function (deltaX, deltaY) {
		this.p1.x += deltaX;
		this.p1.y += deltaY;
		
		this.p2.x += deltaX;
		this.p2.y += deltaY;
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
	},
	
	/**
	Function for determining if a given point is inside the rectangle
	
	@param {Point} p* The given point
	@return {bool} True iff the rectangle contains the point
	**/
	containsPoint: function (p) {
		"use strict";
		
		if (p.x < this.p1.x && p.x < this.p2.x) {
			return false;
		}
		if (p.x > this.p1.x && p.x > this.p2.x) {
			return false;
		}
		if (p.y < this.p1.y && p.y < this.p2.y) {
			return false;
		}
		if (p.y > this.p1.y && p.y > this.p2.y) {
			return false;
		}
		console.log("true");
		return true;
	}
});