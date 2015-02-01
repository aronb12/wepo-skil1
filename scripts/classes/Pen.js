var Pen = Base.extend({
	
	/**
	Constructor
	**/
	constructor: function (start, lineColor, lineWidth) {
		"use strict";
		
		// array of lines that constitute the drawing of pen
		this.path = [];
		this.lineColor = lineColor;
		this.lineWidth = lineWidth;
		this.start = start;
		this.count = 0;
	},
	
	/**
	Function that acts as an event listener for mouse movements
	
	@param {object} canvas* The canvas to be drawn on
	@param {object} context* The canvas context
	@param {Point} p* The point to which the user has dragged the mouse
	**/
	resize: function (canvas, context, p) {
		"use strict";
		
		this.path.push(new Line(new Point(this.start.x, this.start.y),
								p,
								this.lineColor,
								this.lineWidth));
		this.path[this.count].draw(context);
		this.start = this.path[this.count].p2;
		this.count += 1;
	},
	
	/**
	Function for drawing the pen path as a whole
	
	@param {object} context* The canvas context
	**/
	draw: function (context) {
		"use strict";
		var i;
		for (i = 0; i < this.count; i += 1) {
			this.path[i].draw(context);
		}
	},
	
	/**
	Function for altering the location of the pen drawing
	
	@param {number} deltaX* Movement on the x-axis
	@param {number} deltaY* Movement on the y-axis
	**/
	move: function (deltaX, deltaY) {
		"use strict";
		
		var i;
		for (i = 0; i < this.count; i += 1) {
			this.path[i].move(deltaX, deltaY);
		}
	},
	
	/**
	Function for determining if a given point is on the path
	
	@param {Point} p* The given point
	@return {bool} True iff the point is on one of the path lines
	**/
	containsPoint: function (p) {
		"use strict";
		var i;
		for (i = 0; i < this.count; i += 1) {
			if (this.path[i].containsPoint(p)) {
				return true;
			}
		}
		return false;
	}
});