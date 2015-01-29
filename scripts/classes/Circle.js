/**
Circle shape that can be drawn on a canvas.
**/
var Circle = Shape.extend({
	
	/**
	Parameterized constructor
	
	@param {Point}	p1* Input start point
	@param {Point}	p2* Input end point
	@param {string}	strokeColor* Circle line color
	@param {string}	fillColor* Circle fill color
	**/
	constructor: function (p1, p2, strokeColor, lineWidth, fillColor) {
		"use strict";
		
		this.base(p1, p2, strokeColor, lineWidth);
		
		this.center = this.getCenter();
		this.radius = this.getRadius();
		this.fillColor = fillColor;
		this.drawFinish = this.drawSelections[0];
	},
	
	/**
	Helper function for finding the circle radius
	
	@return {number} The radius as a number
	**/
	getRadius: function () {
		"use strict";
		
		return Math.abs(this.center.x - this.p1.x);
		/*var x = Math.pow((this.p1.x - this.center.x), 2.0),
			y = Math.pow((this.p1.y - this.center.y), 2.0);
			
		return Math.sqrt(y + x);*/
	},
	
	/**
	Helper function for calculating the center of the circle.
	
	@return {Point} The center of the circle as a Point object
	**/
	getCenter: function () {
		"use strict";
	
		// x-value of the return Point
		var centerX = 0,
			// y-value of the return Point
			centerY = 0,
			deltaX = this.p2.x - this.p1.x,
			deltaY = this.p2.y - this.p1.y;
		
		// the lesser axis change determines the circle's center
		if (Math.abs(deltaX) < Math.abs(deltaY)) {
			centerX = (deltaX / 2) + this.p1.x;
			
			// change on the x-axis may be a negative number
			centerY = ((Math.abs(deltaX) / 2) * 
					   (Math.abs(deltaY) / deltaY)) + this.p1.y;
		} else {
			centerY = (deltaY / 2) + this.p1.y;
			
			// change on the y-axis may be a negative number
			centerX = ((Math.abs(deltaY) / 2) * 
					   (Math.abs(deltaX)) / deltaX) + this.p1.x;
		}
		return new Point(centerX, centerY);
	},
	
	/**
	Function for drawing on canvas
	
	@param {object} canvas* The canvas context to be drawn on
	**/
	draw: function (canvas) {
		"use strict";
		
		this.base(canvas);
		canvas.arc(this.center.x, this.center.y, this.radius, 2 * Math.PI, false);
		this.drawFinish(canvas);
	},
	
	/**
	An array of functions for drawing the circle.
	**/
	drawSelections: [
		
		/**
		Function for drawing a filled circle on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.fillStyle = this.fillColor;
			canvas.fill();
		},
		
		/**
		Function for drawing a circle border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			canvas.lineWidth = this.lineWidth;
			canvas.strokeStyle = this.strokeColor;
			canvas.stroke();
		},
		
		/**
		Function for drawing a filled circle with border on a canvas
		
		@param {object} canvas* The canvas context to be drawn on
		**/
		function (canvas) {
			"use strict";
			
			this.drawFinish = this.drawSelections[0];
			this.drawFinish(canvas);
			
			this.drawFinish = this.drawSelections[1];
			this.drawFinish(canvas);
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